const Footer = () => {
  return (
    <>
      <div className="flex max-lg:pt-[40px] max-lg:pb-[45px] max-lg:bg-[#faf8ff] items-center justify-center gap-x-[15px] lg:gap-x-[30px]  ">
        {/* reddit */}
        <svg
          className="w-[28px] h-[28px] lg:w-[42px] lg:h-[42px]"
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 29"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            className="lg:fill-white"
            d="M13.9749 0.318689C10.6567 0.319148 7.44691 1.53191 4.91967 3.74004C2.39243 5.94816 0.712627 9.0076 0.180751 12.3711C-0.351124 15.7345 0.299623 19.1826 2.01659 22.0985C3.73355 25.0144 6.40472 27.2079 9.55227 28.2866C10.2511 28.4199 10.5506 27.979 10.5506 27.5997V25.1597C6.66706 26.0209 5.84843 23.2323 5.84843 23.2323C5.57533 22.3535 5.00055 21.6066 4.23111 21.1306C2.96322 20.2489 4.33095 20.2592 4.33095 20.2592C4.77382 20.3234 5.19653 20.4907 5.5668 20.7484C5.93708 21.006 6.24512 21.3471 6.4674 21.7457C6.8541 22.458 7.50041 22.9834 8.26424 23.2064C9.02807 23.4294 9.84687 23.3318 10.5406 22.935C10.597 22.2076 10.9093 21.5261 11.4192 21.0178C8.32431 20.6487 5.05974 19.4185 5.05974 13.9233C5.0371 12.4961 5.55214 11.1151 6.49735 10.0685C6.06952 8.83229 6.11954 7.47468 6.63711 6.2752C6.63711 6.2752 7.80517 5.88562 10.4807 7.74126C12.7684 7.10045 15.1814 7.10045 17.4691 7.74126C20.1347 5.88562 21.3027 6.2752 21.3027 6.2752C21.8203 7.47468 21.8703 8.83229 21.4425 10.0685C22.3877 11.1151 22.9027 12.4961 22.8801 13.9233C22.8801 19.439 19.6155 20.6487 16.5007 21.0076C16.8344 21.3549 17.0917 21.7716 17.2553 22.2296C17.4189 22.6877 17.485 23.1764 17.4491 23.6629V27.5997C17.4491 28.0713 17.6987 28.4301 18.4475 28.2866C21.5992 27.2066 24.2731 25.0089 25.9898 22.0876C27.7065 19.1663 28.3536 15.7126 27.8152 12.3457C27.2768 8.97881 25.588 5.91902 23.0517 3.715C20.5154 1.51098 17.2974 0.306902 13.9749 0.318689Z"
            fill="#858585"
          />
        </svg>
        {/* twitter */}
        <svg
          className="w-[27px] h-[26px] lg:w-[42px] lg:h-[41px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27 27"
        >
          <path
            className="lg:fill-white"
            d="M13.5 0.318604C6.04487 0.318604 0 6.13959 0 13.3186C0 20.4976 6.04487 26.3186 13.5 26.3186C20.9551 26.3186 27 20.4976 27 13.3186C27 6.13959 20.9551 0.318604 13.5 0.318604ZM19.9878 10.1179C19.9969 10.2543 19.9969 10.3965 19.9969 10.5358C19.9969 14.7956 16.6279 19.7025 10.4715 19.7025C8.5731 19.7025 6.81328 19.1715 5.33069 18.2574C5.6019 18.2865 5.86105 18.2981 6.13828 18.2981C7.70525 18.2981 9.14565 17.7874 10.2938 16.9226C8.82321 16.8936 7.58772 15.965 7.16585 14.6882C7.68114 14.7608 8.1452 14.7608 8.67556 14.6302C7.91837 14.4821 7.23779 14.0861 6.74945 13.5095C6.2611 12.9329 5.9951 12.2113 5.99665 11.4673V11.4266C6.43962 11.6675 6.96094 11.8155 7.50636 11.8358C7.04785 11.5415 6.67183 11.1429 6.41163 10.6752C6.15143 10.2075 6.0151 9.68514 6.01473 9.15454C6.01473 8.55387 6.17746 8.00543 6.46976 7.52954C7.3102 8.52583 8.35894 9.34067 9.54783 9.92109C10.7367 10.5015 12.0391 10.8345 13.3704 10.8985C12.8973 8.70767 14.5969 6.93467 16.64 6.93467C17.6042 6.93467 18.4721 7.32351 19.0838 7.9503C19.8402 7.81392 20.5634 7.54115 21.2083 7.17552C20.9581 7.92128 20.4338 8.55097 19.7377 8.94851C20.4127 8.87887 21.0636 8.69896 21.6663 8.44651C21.2113 9.0907 20.6417 9.66235 19.9878 10.1179Z"
            fill="#858585"
          />
        </svg>
        {/* linkedin */}
        <div className="w-[31px] h-[30px] lg:w-[48px] lg:h-[48px]  flex items-center justify-center ">
          <svg
            className="w-[23px] h-[22px] lg:w-[36px] lg:h-[36px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25 23"
          >
            <path
              className="lg:fill-white"
              d="M22.3813 0.0686035H2.61875C1.65 0.0686035 0.875 0.818603 0.875 1.66235V20.8811C0.875 21.7249 1.65 22.4749 2.61875 22.4749H22.3813C23.35 22.4749 24.125 21.7249 24.125 20.8811V1.66235C24.125 0.818603 23.35 0.0686035 22.3813 0.0686035ZM7.75313 19.1936H4.3625V8.5061H7.75313V19.1936ZM6.10625 7.0061C5.04062 7.0061 4.07188 6.16235 4.07188 5.03735C4.07188 3.91235 4.94375 3.0686 6.10625 3.0686C7.17187 3.0686 8.14062 3.91235 8.14062 5.03735C8.14062 6.16235 7.17187 7.0061 6.10625 7.0061ZM20.7344 19.0999H17.3438V13.8499C17.3438 12.6311 17.3438 10.9436 15.5031 10.9436C13.6625 10.9436 13.4688 12.3499 13.4688 13.6624V19.0061H10.0781V8.5061H13.275V9.91235H13.3719C13.8562 9.0686 15.0187 8.1311 16.6656 8.1311C20.1531 8.1311 20.8313 10.3811 20.8313 13.2874V19.0999H20.7344Z"
              fill="#858585"
            />
          </svg>
        </div>
        {/* discord */}
        <div className="w-[32] h-[30px] lg:w-[50px] lg:h-[48px] flex items-center justify-center  ">
          <svg
            className="w-[23px] h-[24px] lg:w-[35px] lg:h-[39px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 23"
          >
            <path
              className="lg:fill-white"
              d="M20.71 0.0686035H3.28999C2.93915 0.0693412 2.5919 0.134873 2.26807 0.261454C1.94425 0.388036 1.65019 0.573188 1.40271 0.806333C1.15523 1.03948 0.959169 1.31605 0.825726 1.62025C0.692283 1.92445 0.624074 2.25031 0.624994 2.57923V19.0567C0.624074 19.3856 0.692283 19.7115 0.825726 20.0157C0.959169 20.3199 1.15523 20.5965 1.40271 20.8296C1.65019 21.0628 1.94425 21.2479 2.26807 21.3745C2.5919 21.5011 2.93915 21.5666 3.28999 21.5674H18.032L17.343 19.3127L19.007 20.763L20.58 22.128L23.375 24.4436V2.57923C23.3759 2.25031 23.3077 1.92445 23.1743 1.62025C23.0408 1.31605 22.8448 1.03948 22.5973 0.806333C22.3498 0.573188 22.0557 0.388036 21.7319 0.261454C21.4081 0.134873 21.0608 0.0693412 20.71 0.0686035ZM15.692 15.9855C15.692 15.9855 15.224 15.4614 14.834 14.9983C15.7763 14.7903 16.6098 14.2766 17.187 13.548C16.7192 13.8398 16.2177 14.081 15.692 14.267C15.0872 14.5091 14.4547 14.6849 13.807 14.7911C12.6936 14.9833 11.5518 14.9791 10.44 14.7789C9.78729 14.6592 9.14763 14.4838 8.529 14.2549C8.2029 14.1373 7.88582 13.9988 7.57999 13.8405C7.54099 13.8161 7.502 13.8039 7.463 13.7795C7.44344 13.7704 7.42582 13.758 7.411 13.743C7.28629 13.6793 7.16482 13.6101 7.04699 13.5358C7.60332 14.2491 8.40803 14.7578 9.32199 14.9739C8.93199 15.437 8.45099 15.9855 8.45099 15.9855C7.67877 16.005 6.91326 15.8462 6.22185 15.5232C5.53044 15.2002 4.93434 14.7228 4.48599 14.133C4.5282 11.6622 5.16829 9.23271 6.35799 7.02767C7.40493 6.25676 8.68136 5.80962 10.011 5.74798L10.141 5.89423C8.89005 6.18445 7.7227 6.72957 6.72199 7.49079C6.72199 7.49079 7.00799 7.34454 7.489 7.13735C8.42345 6.73745 9.41936 6.47833 10.44 6.36954C10.5128 6.35542 10.5867 6.34726 10.661 6.34517C11.5322 6.23876 12.4138 6.23058 13.287 6.32079C14.6602 6.46782 15.9895 6.86529 17.2 7.49079C16.25 6.76585 15.1467 6.23828 13.963 5.94298L14.145 5.74798C15.4746 5.80962 16.7511 6.25676 17.798 7.02767C18.9877 9.23271 19.6278 11.6622 19.67 14.133C19.218 14.7222 18.6194 15.1989 17.9261 15.5218C17.2328 15.8446 16.4659 16.0038 15.692 15.9855Z"
              fill="#858585"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Footer;
