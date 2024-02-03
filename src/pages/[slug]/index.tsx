import AdminLayout from "@/components/layouts/admin-layout";

const Test = () => {
  return <h1>testing....</h1>;
};
const Index = (props: any) => {
  const componentMap: any = {
    dashboard: <Test />,
    upload: <Test />,
    invoice: <Test />,
    schedule: <Test />,
    calendar: <Test />,
    notification: <Test />,
    settings: <Test />,
  };
  const Component = componentMap[`${props.page}`];

  return (
    <>
      <AdminLayout>{Component}</AdminLayout>
    </>
  );
};

export const getStaticPaths = () => {
  const paths = [
    { params: { slug: "dashboard" } },
    { params: { slug: "upload" } },
    { params: { slug: "invoice" } },
    { params: { slug: "schedule" } },
    { params: { slug: "calendar" } },
    { params: { slug: "notification" } },
    { params: { slug: "settings" } },
  ];

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = ({ params }: any) => {
  return {
    props: {
      page: params?.slug,
    },
  };
};

export default Index;
