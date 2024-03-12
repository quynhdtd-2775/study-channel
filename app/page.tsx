export default function Home() {
  const create = async (formData: FormData) => {
    "use server";
    console.log(">>>>>", formData.get("username"));
  };

  return (
    <>
      <div>hello world</div>
      <div>
        <form action={create}>
          <input type="text" name="username" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
