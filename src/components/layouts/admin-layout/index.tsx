import Header from "@/components/Headers/admin";

const Index = ({ children }: any) => {
  return (
    <>
      <div>
        <Header />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Index;
