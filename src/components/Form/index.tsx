import React from "react";
import { useState } from "react";
import Image from "next/image";
import { lato, montserrat } from "@/utils/fonts";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const Index = () => {
  const loginMethods = [
    {
      name: "google",
    },
    { name: "apple" },
  ];
  const router = useRouter();
  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/upload" });
  };
  const [formData, setFormData] = useState<any>({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
  });
  const [loader, setLoader] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoader(true);
    let isValid = true;
    try {
      if (formData?.password?.trim() == "") {
        setError((prevError) => ({
          ...prevError,
          password: "Please enter a valid password!",
        }));
        isValid = false;
      }
      if (formData?.email?.trim() == "") {
        setError((prevError) => ({
          ...prevError,
          email: "Please enter a valid email!",
        }));
        isValid = false;
      }

      if (isValid) {
        setTimeout(() => {
          router.push("/upload");
        }, 3000);
        return;
      }
    } catch (error) {
      console.warn(error);
    } finally {
      setTimeout(() => {
        setLoader(false);
      }, 1000);
    }
  };

  const handleInputChange = (e: any) => {
    const { id, value } = e?.target;
    setError((prev) => ({ ...prev, [id]: "" }));
    setFormData({ ...formData, [id]: value });
  };

  return (
    <>
      <div className="">
        <div className="flex gap-x-[20px] mb-[30px] items-center">
          {loginMethods.map((element, index) => {
            return (
              <React.Fragment key={index}>
                <div
                  onClick={() => handleGoogleSignIn()}
                  className={`${montserrat.className} cursor-pointer flex-1 flex items-center px-[15px] py-[10px] gap-x-[5px] lg:gap-x-[10px] bg-white rounded-[10px] lg:px-[20px] `}
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
          <form noValidate onSubmit={handleSubmit}>
            <div
              className={`flex flex-col relative ${
                error?.email ? "mb-[30px]" : "mb-[20px]"
              } `}
            >
              <label
                htmlFor="email"
                className={`${lato.className} font-[400] text-[16px] leading-[19px] text-black`}
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData?.email}
                onChange={handleInputChange}
                className={`mt-[10px] bg-[#F5F5F5]  outline-none focus:outline-none address text-[16px] leading-[19px] rounded-[10px] px-[10px] py-[10px] lg:px-[15px] lg:py-[11px] ${
                  error?.email ? "border-red-500" : ""
                }`}
              />
              {error?.email && (
                <span className="absolute left-0 bottom-[-20px] text-[14px] leading-[16px] text-red-500">
                  {error?.email}
                </span>
              )}
            </div>
            <div
              className={`flex flex-col relative ${
                error?.password ? "mb-[30px]" : "mb-[20px]"
              } `}
            >
              <label
                htmlFor="password"
                className={`${lato.className} font-[400] text-[16px] leading-[19px] text-black`}
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData?.password}
                onChange={handleInputChange}
                placeholder="Password"
                className={`mt-[10px] bg-[#F5F5F5] outline-none focus:outline-none text-[16px] leading-[19px] rounded-[10px] px-[10px] py-[10px] lg:px-[15px] lg:py-[11px] ${
                  error?.password ? "border-red-500" : ""
                }`}
              />
              {error?.password && (
                <span className="absolute left-0 bottom-[-20px] text-[14px] leading-[16px] text-red-500">
                  {error?.password}
                </span>
              )}
            </div>
            <p className="text-[#346BD4] cursor-pointer mb-[25px] lg:mb-[20px] text-[16px] leading-[19px] ">
              Forgot password?
            </p>
            <button
              type="submit"
              className={`${
                error?.email || error?.password ? "pointer-events-none" : ""
              } ${
                montserrat.className
              } font-bold text-[16px] leading-[20px] bg-[#605BFF]  text-white block w-full text-center py-[15px] rounded-[10px] xl:hover:scale-[1.005] xl:duration-300 ease-in-out `}
            >
              Sign In
              {loader && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-loader animate-spin absolute top-[calc(50%-8px)]  right-[20px] w-[15px] h-[15px]  "
                >
                  <line x1="12" y1="2" x2="12" y2="6" />
                  <line x1="12" y1="18" x2="12" y2="22" />
                  <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
                  <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
                  <line x1="2" y1="12" x2="6" y2="12" />
                  <line x1="18" y1="12" x2="22" y2="12" />
                  <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
                  <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
                </svg>
              )}
            </button>
          </form>
        </div>
        <div className=" w-fit mx-auto">
          <span
            className={`${lato.className} block lg:inline-block text-[#858585] font-normal mb-[20px] lg:mb-0 text-[16px] leading-[19px] `}
          >
            Don’t have an account?
          </span>
          <span className="hidden lg:inline-block ">&nbsp;</span>
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

export default Index;
