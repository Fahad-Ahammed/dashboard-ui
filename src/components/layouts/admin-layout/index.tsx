import Header from "@/components/Headers/admin";

const Index = ({ children }: any) => {
  return (
    <>
      <div className="lg:flex" >
        <Header />
        <main className="flex-1" >{children}</main>
      </div>
    </>
  );
};

export default Index;
