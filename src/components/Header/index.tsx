import styles from "./styles.module.css";
import useScreenWidth from "@/custom-hooks/useScreenWidth";
import { Nunito, Montserrat } from "next/font/google";
const nunito = Nunito({ subsets: ["latin"], weight: ["600"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

const Header = ({ children }: any) => {
  const agentScreenWidth = useScreenWidth();

  return (
    <div
      className={`${styles["clip-bg"]} relative lg:before:absolute before:z-[9] before:w-full before:h-full before:left-0 before:right-0 before:bg-[#faf8ff] bg-[#605bff] h-[80px] lg:h-full`}
    >
      <div
        className={`flex w-[90%] max-w-[740px] h-full items-center lg:items-start justify-between lg:flex-col mx-auto gap-x-[10px] lg:pt-[40px] lg:pb-[45px]`}
      >
        <svg
          className="w-[26px] h-[26px] lg:w-[80px] lg:h-[80px]  "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26 27"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25.9902 13.1291L19.7848 9.94685C19.4943 9.235 18.7951 8.73336 17.9787 8.73336C17.1081 8.73336 16.3707 9.30392 16.1202 10.0915L9.99098 15.1481C9.67551 14.9286 9.29214 14.8 8.87872 14.8C8.36808 14.8 7.90328 14.9963 7.55566 15.3175L0.121365 11.6829C1.00521 5.36344 6.43234 0.5 12.9954 0.5C20.051 0.5 25.7938 6.12091 25.9902 13.1291ZM6.99929 17.2717L0 13.8498C0.185401 20.8678 5.93266 26.5 12.9954 26.5C19.6871 26.5 25.1979 21.444 25.9161 14.9437L25.7557 15.2565L19.4134 12.004C19.0571 12.391 18.5462 12.6334 17.9787 12.6334C17.5037 12.6334 17.0683 12.4635 16.73 12.1812L10.8023 17.0715C10.649 17.9955 9.84616 18.7 8.87872 18.7C7.98246 18.7 7.22743 18.0953 6.99929 17.2717Z"
            fill="#FAFAFB"
          />
        </svg>
        <h1
          className={`${
            agentScreenWidth < 1024 ? nunito.className : montserrat.className
          } lg:w-[65%] relative lg:top-[-40px] lg:text-[72px] lg:leading-[88px] lg:ml-[80px w-full lg:text-center text-[20px] leading-[27px] font-600 text-[#FAFAFB]`}
        >
          Base
        </h1>
        <div className="hidden lg:block lg:ml-[80px] ">{children}</div>
      </div>
    </div>
  );
};

export default Header;
