import React from "react";
import Image from "next/image";
import { Lato, Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });
const lato = Lato({ subsets: ["latin"], weight: ["400"] });
const index = () => {
  const signMethods = [
    {
      name: "google",
    },
    { name: "apple" },
  ];
  return (
    <>
      <div className="">
        <div className="flex gap-x-[20px] mb-[30px] items-center">
          {signMethods.map((element, index) => {
            return (
              <React.Fragment key={index}>
                <div
                  className={`${montserrat.className} flex-1 flex items-center px-[15px] py-[10px] gap-x-[5px] lg:gap-x-[10px] bg-white rounded-[10px] lg:px-[20px] `}
                >
                  <Image
                    className="self-start lg:w-[15px] lg:h-[15px] "
                    alt={`${element.name} icon`}
                    src={`/assets/images/${element.name}.png`}
                    width="11"
                    height="11"
                  />
                  <p className="text-[10px] text-[#858585] leading-[12px] lg:text-[12px] lg:leading-[15px] ">
                    {`Sign in with ${element.name.toUpperCase()}`}
                  </p>
                </div>
              </React.Fragment>
            );
          })}
        </div>
        <div className="px-[25px] py-[30px] lg:py-[35px] bg-white rounded-[10px] mb-[25px] lg:mb-[20px] ">
          <form action="">
            <div className="flex flex-col mb-[20px] ">
              <label
                htmlFor="email"
                className={`${lato.className} font-[400] text-[16px] leading-[19px] text-black mb-[10px`}
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-[10px] bg-[#F5F5F5] outline-none focus:outline-none placeholder:Email address text-[16px] leading-[19px] rounded-[10px] px-[10px] py-[10px] lg:px-[15px] lg:py-[11px]  "
              />
            </div>
            <div className="flex flex-col mb-[20px] ">
              <label
                htmlFor="password"
                className={`${lato.className} font-[400] text-[16px] leading-[19px] text-black mb-[10px`}
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-[10px] bg-[#F5F5F5] outline-none focus:outline-none placeholder:Email address text-[16px] leading-[19px] rounded-[10px] px-[10px] py-[10px] lg:px-[15px] lg:py-[11px] "
              />
            </div>
            <p className="text-[#346BD4] cursor-pointer mb-[25px] lg:mb-[20px] text-[16px] leading-[19px] ">
              Forgot password?
            </p>
            <button
              type="submit"
              className={`${montserrat.className} font-bold text-[16px] leading-[20px] bg-[#605BFF]  text-white block w-full text-center py-[15px] rounded-[10px] xl:hover:scale-[1.005] xl:duration-300 ease-in-out `}
            >
              Sign In
            </button>
          </form>
        </div>
        <div className=" w-fit mx-auto">
          <span
            className={`${lato.className} block lg:inline-block text-[#858585] font-normal mb-[20px] lg:mb-0 text-[16px] leading-[19px] `}
          >
            Don’t have an account?
          </span>
          <span className="hidden lg:inline-block " >&nbsp;</span>
          <span
            className={`${lato.className} cursor-pointer block lg:inline-block w-fit mx-auto text-[#346BD4] font-normal text-[16px] leading-[19px] `}
          >
            Register here
          </span>
        </div>
      </div>
    </>
  );
};

export default index;
