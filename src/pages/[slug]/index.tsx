import AdminLayout from "@/components/layouts/admin-layout";
import Upload from "@/templates/upload";

const DefaultLayout = ({ title }: any) => {
  return (
    <div className="min-h-screen bg-[#fafafb] w-full pt-[50px]  pl-[30px] ">
      <h1 className="text-[24px] leading-[32px] text-black capitalize  ">
        {title}
      </h1>
    </div>
  );
};
const Index = (props: any) => {
  const componentMap: any = {
    dashboard: <DefaultLayout title={"dashboard"} />,
    upload: <Upload />,
    invoice: <DefaultLayout title={"invoice"} />,
    schedule: <DefaultLayout title={"schedule"} />,
    calendar: <DefaultLayout title={"calendar"} />,
    notification: <DefaultLayout title={"notification"} />,
    settings: <DefaultLayout title={"settings"} />,
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
