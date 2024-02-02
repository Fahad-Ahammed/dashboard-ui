import Header from "@/components/Header";
import Footer from "@/components/Footer";

const LoginLayout = ({ children }: any) => {
  return (
    <>
      <div className="lg:hidden ">
        <Header />
        <main className="">{children}</main>
        <Footer />
      </div>

      <div className="hidden lg:flex">
        <div className="w-[50%]">
          <Header>
            <Footer />
          </Header>
        </div>
        <main className="">{children}</main>
      </div>
    </>
  );
};

export default LoginLayout;
