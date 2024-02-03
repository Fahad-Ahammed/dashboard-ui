import LoginLayout from "@/components/layouts/login-layout";
import Form from "@/components/Form";
import {montserrat,lato} from "@/utils/fonts"

export default function Home() {
  return (
    <>
      <LoginLayout>
        <div className="pt-[30px] lg:pt-[190px]  max-w-[740px]  max-lg:mx-auto ">
          <div className="w-[90%] mx-auto xl:ml-[95px] max-w-[425px]  " >
            <div className="ml-[10px] mb-[30px] lg:ml-0 text-black ">
              <h2
                className={`text-[24px] lg:text-[36px] lg:leading-[43px] leading-[29px] font-[700] ${montserrat.className} capitalize mb-[10px] lg:mb-[5px]`}
              >
                sign in
              </h2>
              <p
                className={`${lato.className} text-[12px] lg:text-[16px] lg:leading-[19px] leading-[14px] font-[400]  `}
              >
                Sign in to your account
              </p>
            </div>
            <Form />
          </div>
        </div>
      </LoginLayout>
    </>
  );
}
