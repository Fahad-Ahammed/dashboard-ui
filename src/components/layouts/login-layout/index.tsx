import Header from "@/components/Headers/login-page";
import Footer from "@/components/Footer";
import useScreenWidth from "@/utils/custom-hooks/useScreenWidth";

const LoginLayout = ({ children }: any) => {
  const agentScreenWidth = useScreenWidth();
  return (
    <>
      <div className="lg:flex min-h-screen ">
        <div className="lg:flex-1 ">
          <Header>{agentScreenWidth >= 1024 && <Footer />}</Header>
        </div>
        <main className="lg:flex-1 max-lg:h-[calc(100vh-80px)] bg-[#faf8ff]  ">
          {children}
          {agentScreenWidth < 1024 && <Footer />}
        </main>
      </div>
    </>
  );
};

export default LoginLayout;
