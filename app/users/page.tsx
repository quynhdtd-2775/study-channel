import UserTable from "@/src/organism/users/users";

const UserPage = async (props: any) => {
  const LIMIT = 1000;
  const page = props?.searchParams?.page ?? 1;

  const res = await fetch(
    `http://localhost:8000/users?_page=${page}&_limit=${LIMIT}`,
    {
      method: "GET",
      next: {
        tags: ["list-user"],
      },
    }
  );
  const data = await res.json();

  return (
    <div>
      <UserTable
        users={data ? data : []}
        meta={{
          current: +page,
          pageSize: LIMIT,
          total: 3,
        }}
      />
    </div>
  );
};

export default UserPage;
