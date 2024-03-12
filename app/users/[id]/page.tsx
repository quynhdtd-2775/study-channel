const DetailUserPage = (props: any) => {
  console.log(">>>check log", props);

  const { params } = props;
  return <div>slug = {params?.id}</div>;
};

export default DetailUserPage;
