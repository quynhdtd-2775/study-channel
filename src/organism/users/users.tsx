"use client";
import { IUser } from "@/types/backend";
import { Table, Button, Popconfirm } from "antd";
import { ColumnsType } from "antd/es/table";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { EditTwoTone, PlusOutlined, DeleteTwoTone } from "@ant-design/icons";
import CreateUserModal from "./createUserModal";
import { useState } from "react";
import { handleDeleteUserAction } from "@/actions";
import UpdateUser from "./updateUserModal";

interface IProps {
  users: IUser[] | [];
  meta: any;
}
const UserTable = (props: IProps) => {
  const { users } = props;
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false);
  const [dataUpdate, setDataUpdate] = useState<any>(null);

  const columns: ColumnsType<IUser> = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Action",
      dataIndex: "action",
      width: "10%",
      render: (value, record, index) => {
        return (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <EditTwoTone
              twoToneColor="#f57800"
              style={{ cursor: "pointer", margin: "0 20px" }}
              onClick={() => {
                setIsUpdateModalOpen(true);
                setDataUpdate(record);
              }}
            />

            <Popconfirm
              placement="leftTop"
              title={"Xác nhận xóa user"}
              description={"Bạn có chắc chắn muốn xóa user này ?"}
              onConfirm={() => handleDeleteUser(record)}
              okText="Xác nhận"
              cancelText="Hủy"
            >
              <span style={{ cursor: "pointer" }}>
                <DeleteTwoTone twoToneColor="#ff4d4f" />
              </span>
            </Popconfirm>
          </div>
        );
      },
    },
  ];

  const handleDeleteUser = async (user: any) => {
    await handleDeleteUserAction({ id: user.id });
  };

  const renderHeader = () => {
    return (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>Table List Users</span>
        <Button
          icon={<PlusOutlined />}
          type="primary"
          onClick={() => setIsCreateModalOpen(true)}
        >
          Add a new users
        </Button>
      </div>
    );
  };

  const onChange = (pagination: any, filter: any, sorter: any, extra: any) => {
    if (pagination && pagination.current) {
      const params = new URLSearchParams(searchParams || "");
      params.set("page", pagination.current);
      replace(`${pathname}?${params.toString()}`);
    }
  };

  return (
    <div>
      <Table
        title={renderHeader}
        rowKey={"id"}
        bordered
        dataSource={users}
        columns={columns}
        pagination={{
          current: 1,
          pageSize: 10,
          total: 20,
        }}
        onChange={onChange}
      />

      <CreateUserModal
        isCreateModalOpen={isCreateModalOpen}
        setIsCreateModalOpen={setIsCreateModalOpen}
      />

      <UpdateUser
        isUpdateModalOpen={isUpdateModalOpen}
        setIsUpdateModalOpen={setIsUpdateModalOpen}
        dataUpdate={dataUpdate}
        setDataUpdate={setDataUpdate}
      />
    </div>
  );
};

export default UserTable;
