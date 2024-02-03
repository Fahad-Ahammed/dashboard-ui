import React from "react";
import { nunito } from "@/utils/fonts";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import useScreenWidth from "@/utils/custom-hooks/useScreenWidth";

const Header = () => {
  const agentScreenWidth = useScreenWidth();
  const [showNav, setShowNav] = useState(agentScreenWidth >= 1024);
  const handleNav = () => {
    setShowNav((prev) => !prev);
  };

  return (
    <>
      <div className=" bg-blue-300">
        <NavBar showNav={showNav} handleNav={handleNav} />
        {agentScreenWidth < 1024 && <div className=" relative h-[80px] w-[90%] mx-auto max-w-[1300px] flex items-center ">
          <svg
            onClick={handleNav}
            className={`absolute ${
              showNav ? "max-w-[0px] max-h-[0px] " : "max-w-[16px] max-h-[12px]"
            } duration-300 ease-in-out`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 14"
            fill="none"
          >
            <path
              d="M1 1H17M1 13H17M1 7H17"
              stroke="#231F20"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <Logo showNav={showNav} />
          <Profile />
        </div> }
        
      </div>
    </>
  );
};

const Logo = ({ showNav }: any) => {
  return (
    <div
      className={`flex z-[10] items-center gap-x-[10px] lg:gap-x-[15px] ${
        showNav ? "ml-0" : "ml-[30px] "
      } duration-300 ease-in-out `}
    >
      <svg
        className="min-w-[26px] min-h-[26px] lg:min-w-[42px] lg:min-h-[42px] duration-300 ease-in-out "
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 27 27"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.9902 13.1291L19.7848 9.94685C19.4943 9.235 18.7951 8.73336 17.9787 8.73336C17.1081 8.73336 16.3707 9.30392 16.1202 10.0915L9.99098 15.1481C9.67551 14.9286 9.29214 14.8 8.87872 14.8C8.36808 14.8 7.90328 14.9963 7.55566 15.3175L0.121365 11.6829C1.00521 5.36344 6.43234 0.5 12.9954 0.5C20.051 0.5 25.7938 6.12091 25.9902 13.1291ZM6.99929 17.2717L0 13.8498C0.185401 20.8678 5.93266 26.5 12.9954 26.5C19.6871 26.5 25.1979 21.444 25.9161 14.9437L25.7557 15.2565L19.4134 12.004C19.0571 12.391 18.5462 12.6334 17.9787 12.6334C17.5037 12.6334 17.0683 12.4635 16.73 12.1812L10.8023 17.0715C10.649 17.9955 9.84616 18.7 8.87872 18.7C7.98246 18.7 7.22743 18.0953 6.99929 17.2717Z"
          fill="#605bff"
        />
      </svg>
      <h1
        className={`${nunito.className} lg:text-[24px] lg:leading-[32px] font-[600] relative w-full lg:text-center text-[20px] leading-[27px] text-[#030229]`}
      >
        Base
      </h1>
    </div>
  );
};

const Profile = () => {
  return (
    <>
      <div className="ml-auto flex items-center justify-center gap-x-[25px] ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="23"
          viewBox="0 0 18 23"
          fill="none"
        >
          <path
            d="M16 13.3255V9.20108C16 5.5011 13.815 2.38423 10.855 1.44687C10.562 0.59807 9.846 0 9 0C8.154 0 7.438 0.59807 7.145 1.44687C4.185 2.38538 2 5.5011 2 9.20108V13.3255L0.293001 15.2887C0.199958 15.3954 0.126171 15.5221 0.0758854 15.6617C0.0256001 15.8012 -0.000189449 15.9508 1.04767e-06 16.1019V18.4022C1.04767e-06 18.7072 0.105358 18.9997 0.292894 19.2154C0.480431 19.4311 0.734785 19.5523 1 19.5523H17C17.2652 19.5523 17.5196 19.4311 17.7071 19.2154C17.8946 18.9997 18 18.7072 18 18.4022V16.1019C18.0002 15.9508 17.9744 15.8012 17.9241 15.6617C17.8738 15.5221 17.8 15.3954 17.707 15.2887L16 13.3255ZM16 17.252H2V16.578L3.707 14.6148C3.80004 14.5081 3.87383 14.3814 3.92412 14.2419C3.9744 14.1023 4.00019 13.9527 4 13.8016V9.20108C4 6.03016 6.243 3.45041 9 3.45041C11.757 3.45041 14 6.03016 14 9.20108V13.8016C14 14.1076 14.105 14.3997 14.293 14.6148L16 16.578V17.252ZM9 23.0027C9.6193 23.0036 10.2235 22.7826 10.7285 22.3703C11.2335 21.9581 11.6143 21.3751 11.818 20.7024H6.182C6.38566 21.3751 6.76648 21.9581 7.27151 22.3703C7.77654 22.7826 8.3807 23.0036 9 23.0027Z"
            fill="black"
          />
        </svg>
        <div className="relative w-[30px] h-[30px] overflow-hidden  rounded-full ">
          <Image
            className="object-cover"
            src="/assets/images/user.png"
            alt="user"
            fill
          />
        </div>
      </div>
    </>
  );
};

const NavBar = ({ handleNav, showNav }: any) => {
  const router = useRouter();
  const navs = [
    {
      name: "dashboard",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M4.53991 2H7.91991C9.32991 2 10.4599 3.15 10.4599 4.561V7.97C10.4599 9.39 9.32991 10.53 7.91991 10.53H4.53991C3.13991 10.53 1.99991 9.39 1.99991 7.97V4.561C1.99991 3.15 3.13991 2 4.53991 2ZM4.53991 13.4697H7.91991C9.32991 13.4697 10.4599 14.6107 10.4599 16.0307V19.4397C10.4599 20.8497 9.32991 21.9997 7.91991 21.9997H4.53991C3.13991 21.9997 1.99991 20.8497 1.99991 19.4397V16.0307C1.99991 14.6107 3.13991 13.4697 4.53991 13.4697ZM19.46 2H16.08C14.67 2 13.54 3.15 13.54 4.561V7.97C13.54 9.39 14.67 10.53 16.08 10.53H19.46C20.86 10.53 22 9.39 22 7.97V4.561C22 3.15 20.86 2 19.46 2ZM16.08 13.4697H19.46C20.86 13.4697 22 14.6107 22 16.0307V19.4397C22 20.8497 20.86 21.9997 19.46 21.9997H16.08C14.67 21.9997 13.54 20.8497 13.54 19.4397V16.0307C13.54 14.6107 14.67 13.4697 16.08 13.4697Z" ${
        "dashboard" == router.asPath.split("/")[1]
          ? "fill=#605bff"
          : "fill=#9A9AA9"
      } />
      </svg>`,
    },
    {
      name: "upload",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="35" viewBox="0 0 24 22" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.3304 0H16.6694C20.0704 0 21.9904 2.1243 22.0004 5.86962V16.1552C22.0004 19.8994 20.0704 22.0248 16.6694 22.0248H7.3304C3.9294 22.0248 2.0004 19.8994 2.0004 16.1552V5.86962C2.0004 2.1243 3.9294 0 7.3304 0ZM12.0494 17.4657C12.4804 17.4657 12.8394 17.1133 12.8794 16.6398V5.41811C12.9194 5.07672 12.7704 4.73424 12.5004 4.54813C12.2194 4.36092 11.8794 4.36092 11.6104 4.54813C11.3394 4.73424 11.1904 5.07672 11.2194 5.41811V16.6398C11.2704 17.1133 11.6294 17.4657 12.0494 17.4657ZM16.6504 17.4657C17.0704 17.4657 17.4294 17.1133 17.4804 16.6398V13.0277C17.5094 12.6742 17.3604 12.3449 17.0894 12.1577C16.8204 11.9705 16.4804 11.9705 16.2004 12.1577C15.9294 12.3449 15.7804 12.6742 15.8204 13.0277V16.6398C15.8604 17.1133 16.2194 17.4657 16.6504 17.4657ZM8.21938 16.6398C8.17938 17.1133 7.82038 17.4657 7.38938 17.4657C6.95938 17.4657 6.59938 17.1133 6.56038 16.6398V9.03018C6.53038 8.6877 6.67938 8.34741 6.95038 8.1602C7.21938 7.97299 7.56038 7.97299 7.83038 8.1602C8.09938 8.34741 8.25038 8.6877 8.21938 9.03018V16.6398Z" ${
        "upload" == router.asPath.split("/")[1]
          ? "fill=#605bff"
          : "fill=#9A9AA9"
      }  />
      </svg>`,
    },
    {
      name: "invoice",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 19" fill="none">
      <g opacity="1">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M21.7872 7.47427C21.6518 7.61912 21.4681 7.70189 21.2747 7.70189C20.559 7.70189 19.9787 8.32267 19.9787 9.07795C19.9787 9.83841 20.5522 10.4561 21.2611 10.4644C21.6605 10.4685 22 10.7665 22 11.1938V13.8476C22 16.0814 20.3075 17.8931 18.2186 17.8931H15.0658C14.7398 17.8931 14.4758 17.6106 14.4758 17.2619V15.0271C14.4758 14.5926 14.1567 14.2511 13.7505 14.2511C13.354 14.2511 13.0251 14.5926 13.0251 15.0271V17.2619C13.0251 17.6106 12.7611 17.8931 12.4362 17.8931H5.78143C3.70213 17.8931 2 16.0824 2 13.8476V11.1938C2 10.7665 2.33946 10.4685 2.73888 10.4644C3.44874 10.4561 4.02128 9.83841 4.02128 9.07795C4.02128 8.34336 3.46035 7.78466 2.72534 7.78466C2.53191 7.78466 2.34816 7.70189 2.21277 7.55704C2.07737 7.41219 2 7.21561 2 7.00868V4.32897C2 2.09829 3.706 0.273193 5.7911 0.273193H12.4362C12.7611 0.273193 13.0251 0.555649 13.0251 0.904322V3.55299C13.0251 3.97719 13.354 4.32897 13.7505 4.32897C14.1567 4.32897 14.4758 3.97719 14.4758 3.55299V0.904322C14.4758 0.555649 14.7398 0.273193 15.0658 0.273193H18.2186C20.3075 0.273193 22 2.08381 22 4.31862V6.92591C22 7.13284 21.9226 7.32942 21.7872 7.47427ZM13.7505 12.2439C14.1567 12.2439 14.4758 11.8922 14.4758 11.468V7.32942C14.4758 6.90522 14.1567 6.55344 13.7505 6.55344C13.354 6.55344 13.0251 6.90522 13.0251 7.32942V11.468C13.0251 11.8922 13.354 12.2439 13.7505 12.2439Z"  ${
        "invoice" == router.asPath.split("/")[1]
          ? "fill=#605bff"
          : "fill=#9A9AA9"
      } />
      </g>
      </svg>`,
    },
    {
      name: "schedule",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="27" viewBox="0 0 24 27" fill="none">
      <g opacity="1">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.81 2.47559H16.191C19.28 2.47559 21 4.4358 21 7.79458V19.1704C21 22.5843 19.28 24.5004 16.191 24.5004H7.81C4.77 24.5004 3 22.5843 3 19.1704V7.79458C3 4.4358 4.77 2.47559 7.81 2.47559ZM8.07999 7.60737V7.59636H11.069C11.5 7.59636 11.85 7.98179 11.85 8.45423C11.85 8.93987 11.5 9.32531 11.069 9.32531H8.07999C7.64899 9.32531 7.29999 8.93987 7.29999 8.46634C7.29999 7.99281 7.64899 7.60737 8.07999 7.60737ZM8.07999 14.3029H15.92C16.35 14.3029 16.7 13.9175 16.7 13.444C16.7 12.9704 16.35 12.5839 15.92 12.5839H8.07999C7.64899 12.5839 7.29999 12.9704 7.29999 13.444C7.29999 13.9175 7.64899 14.3029 8.07999 14.3029ZM8.07999 19.3356H15.92C16.319 19.2915 16.62 18.916 16.62 18.4766C16.62 18.0251 16.319 17.6507 15.92 17.6066H8.07999C7.77999 17.5736 7.48999 17.7278 7.32999 18.0141C7.16999 18.2894 7.16999 18.6528 7.32999 18.9391C7.48999 19.2145 7.77999 19.3796 8.07999 19.3356Z"  ${
        "schedule" == router.asPath.split("/")[1]
          ? "fill=#605bff"
          : "fill=#9A9AA9"
      } />
      </g>
      </svg>`,
    },
    {
      name: "calendar",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28" fill="none">
      <g opacity="1">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4109 3.75171L16.4119 4.57722C19.1665 4.81497 20.9862 6.88207 20.9891 10.0521L21 19.3309C21.0039 22.787 19.0322 24.9136 15.8718 24.9191L8.15188 24.9301C5.01119 24.9345 3.01482 22.7573 3.01087 19.2913L3.00001 10.1214C2.99606 6.9305 4.75153 4.86891 7.50617 4.59043L7.50518 3.76492C7.5042 3.28061 7.83001 2.91628 8.26444 2.91628C8.69886 2.91518 9.02468 3.27841 9.02567 3.76271L9.02666 4.5332L14.8914 4.52439L14.8904 3.75391C14.8894 3.2696 15.2152 2.90638 15.6497 2.90528C16.0742 2.90418 16.4099 3.2674 16.4109 3.75171ZM4.52146 10.4615L19.4696 10.4395V10.0543C19.4272 7.68777 18.349 6.44619 16.4138 6.26128L16.4148 7.10881C16.4148 7.5821 16.0801 7.95744 15.6556 7.95744C15.2211 7.95854 14.8943 7.58431 14.8943 7.11101L14.8933 6.21945L9.02862 6.22826L9.0296 7.11871C9.0296 7.59311 8.70477 7.96735 8.27035 7.96735C7.83592 7.96845 7.50912 7.59531 7.50912 7.12091L7.50813 6.27338C5.58284 6.48582 4.51751 7.7318 4.52048 10.1192L4.52146 10.4615ZM15.2399 15.4641V15.4763C15.2498 15.9826 15.625 16.3667 16.0801 16.3557C16.5244 16.3436 16.8789 15.9242 16.869 15.4179C16.8483 14.9336 16.4918 14.5385 16.0485 14.5396C15.5943 14.5506 15.2389 14.9578 15.2399 15.4641ZM16.0554 20.4063C15.6013 20.3952 15.235 19.9781 15.234 19.4718C15.2241 18.9655 15.5884 18.5461 16.0426 18.534H16.0525C16.5165 18.534 16.8927 18.9511 16.8927 19.4685C16.8937 19.9858 16.5185 20.4052 16.0554 20.4063ZM11.1721 15.4818C11.1919 15.9881 11.568 16.3832 12.0222 16.3612C12.4665 16.3381 12.821 15.9198 12.8012 15.4135C12.7903 14.9182 12.425 14.533 11.9807 14.5341C11.5266 14.5561 11.1711 14.9754 11.1721 15.4818ZM12.0261 20.3567C11.572 20.3787 11.1968 19.9836 11.176 19.4773C11.176 18.9709 11.5305 18.5527 11.9847 18.5296C12.429 18.5285 12.7953 18.9137 12.8051 19.4079C12.8259 19.9153 12.4704 20.3336 12.0261 20.3567ZM7.1043 15.5203C7.12405 16.0266 7.50022 16.4228 7.95439 16.3997C8.39869 16.3777 8.75314 15.9584 8.73241 15.452C8.72253 14.9567 8.35722 14.5715 7.91194 14.5726C7.45777 14.5946 7.10332 15.014 7.1043 15.5203ZM7.95836 20.3622C7.50419 20.3853 7.12901 19.9891 7.10827 19.4828C7.10728 18.9765 7.46272 18.5571 7.91689 18.5351C8.36119 18.534 8.72749 18.9192 8.73736 19.4145C8.7581 19.9208 8.40365 20.3402 7.95836 20.3622Z"  ${
        "calendar" == router.asPath.split("/")[1]
          ? "fill=#605bff"
          : "fill=#9A9AA9"
      } />
      </g>
      </svg>`,
    },
    {
      name: "notification",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="27" viewBox="0 0 24 27" fill="none">
    <g opacity="1">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7071 9.81961C18.7071 11.2027 19.039 12.0179 19.7695 12.9573C20.3231 13.6494 20.5 14.5378 20.5 15.5017C20.5 16.4644 20.2128 17.3783 19.6373 18.1203C18.884 19.0098 17.8215 19.5777 16.7372 19.6764C15.1659 19.8239 13.5937 19.9482 12.0005 19.9482C10.4063 19.9482 8.83505 19.8739 7.26375 19.6764C6.17846 19.5777 5.11602 19.0098 4.36367 18.1203C3.78822 17.3783 3.5 16.4644 3.5 15.5017C3.5 14.5378 3.6779 13.6494 4.23049 12.9573C4.98384 12.0179 5.29392 11.2027 5.29392 9.81961V9.35045C5.29392 7.4982 5.71333 6.28703 6.577 5.10137C7.86106 3.37224 9.91935 2.33521 11.9558 2.33521H12.0452C14.1254 2.33521 16.2502 3.42215 17.5125 5.2256C18.3314 6.38685 18.7071 7.547 18.7071 9.35045V9.81961ZM9.07367 22.2245C9.07367 21.67 9.53582 21.416 9.96318 21.3073C10.4631 21.1908 13.5093 21.1908 14.0092 21.3073C14.4365 21.416 14.8987 21.67 14.8987 22.2245C14.8738 22.7525 14.5926 23.2205 14.204 23.5178C13.7001 23.9503 13.1087 24.2243 12.4906 24.323C12.1487 24.3718 11.8128 24.3729 11.4828 24.323C10.8636 24.2243 10.2723 23.9503 9.76937 23.5167C9.37978 23.2205 9.09852 22.7525 9.07367 22.2245Z"  ${
      "notification" == router.asPath.split("/")[1]
        ? "fill=#605bff"
        : "fill=#9A9AA9"
    } />
    </g>
    </svg>`,
    },
    {
      name: "settings",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="27" viewBox="0 0 24 27" fill="none">
    <g opacity="1">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.4023 15.5175C20.7599 15.7268 21.0359 16.0571 21.23 16.3875C21.6082 17.0703 21.5775 17.9072 21.2096 18.645L20.4942 19.9665C20.1161 20.6713 19.411 21.1118 18.6854 21.1118C18.3277 21.1118 17.9291 21.0017 17.6021 20.7815C17.3364 20.5942 17.0298 20.5282 16.7028 20.5282C15.691 20.5282 14.8428 21.4422 14.8121 22.5324C14.8121 23.7989 13.8719 24.79 12.6967 24.79H11.3068C10.1214 24.79 9.18116 23.7989 9.18116 22.5324C9.16072 21.4422 8.3125 20.5282 7.30076 20.5282C6.96351 20.5282 6.65693 20.5942 6.40144 20.7815C6.07441 21.0017 5.66563 21.1118 5.31816 21.1118C4.58235 21.1118 3.8772 20.6713 3.49908 19.9665L2.79393 18.645C2.4158 17.9292 2.39536 17.0703 2.77349 16.3875C2.937 16.0571 3.24359 15.7268 3.59106 15.5175C3.8772 15.3633 4.06116 15.1101 4.23489 14.8127C4.74587 13.8657 4.43928 12.6212 3.57062 12.0596C2.55888 11.4319 2.23185 10.0333 2.81437 8.9431L3.49908 7.64364C4.09181 6.55341 5.35904 6.16797 6.381 6.80669C7.2701 7.33529 8.42491 6.98289 8.94611 6.04684C9.10962 5.73849 9.2016 5.40812 9.18116 5.07774C9.16072 4.64826 9.27314 4.2408 9.46731 3.91043C9.84543 3.22766 10.5301 2.78716 11.2762 2.76514H12.7171C13.4734 2.76514 14.1581 3.22766 14.5362 3.91043C14.7202 4.2408 14.8428 4.64826 14.8121 5.07774C14.7917 5.40812 14.8837 5.73849 15.0472 6.04684C15.5684 6.98289 16.7232 7.33529 17.6225 6.80669C18.6343 6.16797 19.9117 6.55341 20.4942 7.64364L21.1789 8.9431C21.7717 10.0333 21.4447 11.4319 20.4227 12.0596C19.554 12.6212 19.2474 13.8657 19.7686 14.8127C19.9322 15.1101 20.1161 15.3633 20.4023 15.5175ZM9.10962 13.7886C9.10962 15.5175 10.4075 16.8941 12.012 16.8941C13.6165 16.8941 14.8837 15.5175 14.8837 13.7886C14.8837 12.0596 13.6165 10.6721 12.012 10.6721C10.4075 10.6721 9.10962 12.0596 9.10962 13.7886Z" ${
      "settings" == router.asPath.split("/")[1]
        ? "fill=#605bff"
        : "fill=#9A9AA9"
    } />
    </g>
    </svg>`,
    }, 
  ];
  return (
    <>
      <nav
        className={`fixed z-[3] w-full h-full bg-white duration-300 ease-in-out ${
          showNav ? "translate-x-[0%] " : "translate-x-[-100%] "
        } `}
      >
        <div className="w-[90%] mx-auto max-w-[1300px] h-[80px] mb-[45px] flex items-center ">
          {/* <Logo /> */}
          <svg
            onClick={handleNav}
            className="ml-auto"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M12.3424 1.65682L6.68552 7.31375M6.68552 7.31375L1.0287 1.65685M6.68552 7.31375L1.02872 12.9706M6.68552 7.31375L12.3424 12.9706"
              stroke="#999CA0"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="">
          <div className="w-[90%] mx-auto max-w-[1300px]">
            {navs.map((element: any, index: any) => {
              return (
                <React.Fragment key={index}>
                  <div
                    onClick={() => {
                      if (element?.name != router.asPath.split("/")[1]) {
                        handleNav();
                        router.push(`/${element.name}`);
                      }
                    }}
                    className="pl-[15px] mb-[40px] cursor-pointer "
                  >
                    <div className="flex gap-x-[15px] items-center">
                      <div
                        dangerouslySetInnerHTML={{ __html: element.icon }}
                      ></div>
                      <p
                        className={`${nunito.className} font-[600] text-[16px] leading-[21px] text-[#9A9AA9] capitalize `}
                      >
                        {element.name}
                      </p>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
