import Header from "@/components/Headers/admin";
import { Profile } from "@/components/Headers/admin";
import { useSession } from "next-auth/react";

const Index = ({ children }: any) => {
  const { data: session } = useSession();

  return (
    <>
      {session && (
        <div className="lg:flex max-w-[1600px] mx-auto ">
          <Header />
          <main className="flex-1">{children}</main>
          <div className="hidden lg:block bg-red-300 lg:bg-[#fafafb] px-[30px] pt-[50px] ">
            <Profile />
          </div>
        </div>
      )}
    </>
  );
};

export default Index;
