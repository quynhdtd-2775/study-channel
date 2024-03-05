"use client";
import { IUser } from "@/types/backend";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

interface IProps {
  users: IUser[] | [];
  meta: any;
}
const UserTable = (props: IProps) => {
  const { users } = props;
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  console.log(users);
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
      render: (value, record, index) => {
        return (
          <>
            <div> Edit </div>
            <div> Delete </div>
          </>
        );
      },
    },
  ];

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
    </div>
  );
};

export default UserTable;
