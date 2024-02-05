import Header from "@/components/Headers/admin";
import { Profile } from "@/components/Headers/admin";
import { checkAuthentication } from "@/utils/auth";
import { useLayoutEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const Index = ({ children }: any) => {
  const router = useRouter();
  const [isAuthenticated, setAuthenticated] = useState(false);
  const { status } = useSession();

  useLayoutEffect(() => {
    if (checkAuthentication() || status === "authenticated") {
      setAuthenticated(true);
    } else {
      router.push("/");
    }
  }, [router,status]);
  return (
    <>
      {isAuthenticated && (
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
