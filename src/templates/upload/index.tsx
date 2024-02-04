import { nunito, figtree } from "@/utils/fonts";
import useScreenWidth from "@/utils/custom-hooks/useScreenWidth";
import { useState } from "react";
import Link from "next/link";
import Papa from "papaparse";

const Index = () => {
  const [uploadedFileName, setFileName]: any = useState("");
  const [uploadedData, setUploadedData]: any = useState([]);
  const [isUploaded, setUploaded] = useState(false);
  const [selectedTags, setTags]: any = useState({});
  const [isLoading, setLoading] = useState(false);
  const agentScreenWidth = useScreenWidth();
  const [isDragging, setDragging] = useState(false);
  const [showError, SetError] = useState(false);

  const handleFileChange = (e: any) => {
    const file = e?.target?.files[0];
    setFileName(file.name);
    Papa.parse(file, {
      complete: (result: any) => {
        setUploadedData(result.data);
      },
      header: true,
    });
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    setDragging(false);

    const file = e.dataTransfer.files[0];
    setFileName(file.name);
    Papa.parse(file, {
      complete: (result) => {
        setUploadedData(result.data);
      },
      header: true,
    });
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragEnter = (e: any) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e: any) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleSelect = (e: any, rowId: any) => {
    const { value } = e?.target;
    if (!selectedTags[rowId]?.includes(value)) {
      setTags((prevTags: any) => ({
        ...prevTags,
        [rowId]: [...(prevTags[rowId] || []), value],
      }));
    }
  };

  const handleTagFilter = (rowId: any, tag: any) => {
    const filteredTags = selectedTags[rowId]?.filter(
      (element: any, index: any) => {
        return element != tag;
      }
    );
    setTags((prevTags: any) => {
      return {
        ...prevTags,
        [rowId]: filteredTags,
      };
    });
  };

  const handleUpload = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setUploaded(true);
    }, 2000);
  };

  return (
    <>
      <div className="bg-[#fafafb] min-h-screen  pt-[30px]  lg:py-[50px] lg:pl-[30px]">
        <div className="w-[90%] lg:w-full max-lg:mx-auto">
          <h2
            className={`${
              agentScreenWidth < 1024 ? nunito.className : figtree.className
            } px-[15px] lg:px-0 font-bold text-[18px] lg:font-[600] lg:text-[24px] lg:leading-[32px] leading-[21px] text-[#030229] mb-[25px] lg:mb-[140px] `}
          >
            Upload CSV
          </h2>
          <div className="bg-white relative max-w-[400px] mx-auto rounded-[10px] shadow-[4px_4px_15px_0px_#0000000A] p-[15px] mb-[50px] ">
            <div
              className={`${figtree.className} duration-200 ease-in-out ${
                showError
                  ? "translate-y-[0px] opacity-100 "
                  : "opacity-0  translate-y-[-5px]"
              } absolute top-0 left-0 text-[14px] leading-[18px] font-[600] lg:text-[16px] lg:leading-[22px]  text-white bg-red-600 rounded-[10px] p-[15px] uppercase`}
            >
              please drop a .csv file
            </div>
            <div
              className={`w-full border border-dashed mb-[15px] h-[260px] rounded-[8px] border-[#EBEBEB]  flex items-center justify-center ${
                isDragging ? "bg-gray-200" : ""
              } `}
              onDragOver={handleDragOver}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div className="flex items-center justify-center flex-col">
                <input
                  type="file"
                  accept=".csv"
                  name="upload"
                  id="upload"
                  onChange={handleFileChange}
                  hidden
                />
                <svg
                  className="mb-[16px] lg:mb-[25px] "
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <g clipPath="url(#clip0_22_1418)">
                    <path
                      d="M22.2801 17.2997L10.4556 15.1997V30.7166C10.4556 31.4252 11.0264 31.9997 11.7305 31.9997H32.1341C32.8382 31.9997 33.4091 31.4252 33.4091 30.7166V24.9997L22.2801 17.2997Z"
                      fill="#185C37"
                    />
                    <path
                      d="M22.2802 4H11.7306C11.0264 4 10.4556 4.57446 10.4556 5.2831V11L22.2802 18L28.5402 20.1L33.4091 18V11L22.2802 4Z"
                      fill="#21A366"
                    />
                    <path
                      d="M10.4556 11H22.2802V18H10.4556V11Z"
                      fill="#107C41"
                    />
                    <path
                      opacity="0.1"
                      d="M18.9185 9.60059H10.4556V27.1006H18.9185C19.6216 27.0983 20.1911 26.5252 20.1934 25.8175V10.8837C20.1911 10.176 19.6216 9.60289 18.9185 9.60059Z"
                      fill="black"
                    />
                    <path
                      opacity="0.2"
                      d="M18.2229 10.3003H10.4556V27.8003H18.2229C18.9261 27.798 19.4956 27.2249 19.4978 26.5172V11.5834C19.4956 10.8757 18.9261 10.3026 18.2229 10.3003Z"
                      fill="black"
                    />
                    <path
                      opacity="0.2"
                      d="M18.2229 10.3003H10.4556V26.4003H18.2229C18.9261 26.398 19.4956 25.8249 19.4978 25.1172V11.5834C19.4956 10.8757 18.9261 10.3026 18.2229 10.3003Z"
                      fill="black"
                    />
                    <path
                      opacity="0.2"
                      d="M17.5273 10.3003H10.4556V26.4003H17.5273C18.2305 26.398 18.8 25.8249 18.8023 25.1172V11.5834C18.8 10.8757 18.2305 10.3026 17.5273 10.3003Z"
                      fill="black"
                    />
                    <path
                      d="M4.77496 10.3003H17.5274C18.2315 10.3003 18.8023 10.8748 18.8023 11.5834V24.4172C18.8023 25.1258 18.2315 25.7003 17.5274 25.7003H4.77496C4.07082 25.7003 3.5 25.1258 3.5 24.4172V11.5834C3.5 10.8748 4.07082 10.3003 4.77496 10.3003Z"
                      fill="url(#paint0_linear_22_1418)"
                    />
                    <path
                      d="M7.44867 22.1705L10.1307 17.988L7.67334 13.8286H9.65011L10.9912 16.4886C11.115 16.7413 11.1998 16.9289 11.2457 17.0528H11.2631C11.3512 16.8512 11.444 16.6554 11.5413 16.4655L12.9749 13.83H14.7896L12.2696 17.9649L14.8536 22.1705H12.9227L11.3737 19.2508C11.3008 19.1266 11.2388 18.9961 11.1887 18.8609H11.1658C11.1204 18.9934 11.0602 19.1202 10.9863 19.2389L9.39138 22.1705H7.44867Z"
                      fill="white"
                    />
                    <path
                      d="M32.1342 4H22.2802V11H33.4091V5.2831C33.4091 4.57446 32.8383 4 32.1342 4Z"
                      fill="#33C481"
                    />
                    <path
                      d="M22.2802 18H33.4091V25H22.2802V18Z"
                      fill="#107C41"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_22_1418"
                      x1="6.15832"
                      y1="9.2977"
                      x2="16.2396"
                      y2="26.6473"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#18884F" />
                      <stop offset="0.5" stopColor="#117E43" />
                      <stop offset="1" stopColor="#0B6631" />
                    </linearGradient>
                    <clipPath id="clip0_22_1418">
                      <rect
                        width="29.9091"
                        height="28"
                        fill="white"
                        transform="translate(3.5 4)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                {uploadedFileName ? (
                  <div className={`${figtree.className}`}>
                    <p className="text-[16px] mb-[15px]  leading-[24px] text-[#999CA0] ">
                      {uploadedFileName}
                    </p>
                    <p
                      onClick={() => {
                        setFileName("");
                        setUploadedData([]);
                        setUploaded(false);
                      }}
                      className=" w-fit mx-auto cursor-pointer text-[14px] leading-[24px] text-[#D33030]"
                    >
                      Remove
                    </p>
                  </div>
                ) : (
                  <p
                    className={`${figtree.className} text-[14px] leading-[24px] text-[#999CA0] `}
                  >
                    {agentScreenWidth < 1024
                      ? "Upload your excel sheet "
                      : "Drop your excel sheet here or "}
                    <label
                      htmlFor="upload"
                      className="cursor-pointer text-[#605BFF]"
                    >
                      {agentScreenWidth < 1024 ? "here" : "browse"}
                    </label>
                  </p>
                )}
              </div>
            </div>
            <button
              onClick={handleUpload}
              className={`py-[10px] h-[44px] flex items-center justify-center w-full rounded-[8px] hover:bg-[#605BFF]/95 duration-300 ease-out ${
                !uploadedFileName ? "pointer-events-none" : ""
              }  ${
                isUploaded
                  ? "bg-[#605BFF]/50 pointer-events-none "
                  : "bg-[#605BFF]"
              } `}
            >
              {isLoading ? (
                <svg
                  aria-hidden="true"
                  className="w-[19px] h-[19px] text-white animate-spin fill-[#605BFF] mx-auto "
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              ) : (
                <div className="flex items-center gap-x-[10px] w-fit justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M19.125 14.1923V16.9327C19.125 18.1435 18.1435 19.125 16.9327 19.125H7.06731C5.85653 19.125 4.875 18.1435 4.875 16.9327V14.1923M12 15.8365V4.875M12 4.875L8.71154 8.16346M12 4.875L15.2885 8.16346"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span
                    className={` ${figtree.className} capitalize text-[14px] leading-[24px] text-white font-[600]`}
                  >
                    upload
                  </span>
                </div>
              )}
            </button>
          </div>
          {isUploaded && (
            <div className="xl:max-w-[90%] xl:mx-auto ">
              <h3
                className={`${nunito.className} font-bold text-16px leading-[22px] text-[#030229] mb-[25px] pl-[10px] capitalize `}
              >
                uploads
              </h3>
              <div className="overflow-x-scroll bg-[#F5F5F5] rounded-[8px] px-[20px]">
                <table className="w-full table-fixed border-spacing-y-[10px] border-separate ">
                  <thead>
                    <tr
                      className={`text-left ${figtree.className} text-[14px] leading-[24px] font-[600] `}
                    >
                      <th className="w-20 lg:w-10 xl:w-8 p-[10px]xl:px-[15px]">
                        SI.No
                      </th>
                      <th className="w-52 lg:w-28 xl:w-16 p-[10px] lg:px-[15px]">
                        Links
                      </th>
                      <th className="w-36 lg:w-16 xl:w-8 p-[10px] lg:px-[15px]">
                        Prefix
                      </th>
                      <th className="w-48 lg:w-32 xl:w-14 p-[10px] lg:px-[15px]">
                        Add Tags
                      </th>
                      <th className="w-64 lg:w-32 xl:w-20 p-[10px] lg:px-[15px]">
                        Selected Tags
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {uploadedData?.length > 0 &&
                      uploadedData?.map((item: any) => (
                        <tr
                          key={item?.id}
                          className={`${figtree.className} text-[12px] leading-[24px] text-black  lg:text-[14px] `}
                        >
                          <td className="p-[10px] lg:p-[15px] lg:bg-white lg:rounded-l-[8px]  py-[10px]">
                            {item?.id.toString().padStart(2, "0")}
                          </td>
                          <td className="p-[10px] lg:p-[15px] bg-white max-lg:rounded-l-[8px]">
                            <Link
                              className={`${figtree.className} font-[400] text-[12px] lg:text-[14px] text-[#5B93FF] underline leading-[24px] `}
                              target="_blank"
                              href={`https://www.${item.links}`}
                            >
                              {`www.${item.links}`}
                            </Link>
                          </td>
                          <td className="p-[10px] lg:p-[15px] bg-white">
                            {item.prefix}
                          </td>
                          <td className="p-[10px] lg:p-[15px] bg-white">
                            <div className="w-[150px] relative">
                              <select
                                name="tags"
                                id="tags"
                                onChange={(e) => handleSelect(e, item.id)}
                                className={`bg-transparent relative border appearance-none py-[3px] lg:py-[5px] px-[10px] w-[150px] rounded-[8px]`}
                              >
                                <option
                                  disabled
                                  selected
                                  className={`${figtree.className} text-[14px] leading-[24px] text-black`}
                                >{`Select Tags`}</option>
                                {item["select tags"]
                                  .split(", ")
                                  .map((element: any, index: any) => {
                                    return (
                                      <option
                                        key={index}
                                        value={element}
                                        className="text-[14px] leading-[24px] text-black"
                                      >
                                        {element}
                                      </option>
                                    );
                                  })}
                              </select>
                              <svg
                                className="absolute pointer-events-none top-[50%] right-[10%] translate-y-[-50%] "
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M17 9.75L12.5 14.25L8 9.75"
                                  stroke="#999CA0"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                          </td>
                          <td className="p-[10px] lg:p-[15px] bg-white rounded-r-[8px] ">
                            <div className="flex flex-wrap gap-x-[10px] gap-y-[5px] ">
                              {selectedTags[item.id]?.length > 0 &&
                                selectedTags[item.id]?.map(
                                  (element: any, index: any) => {
                                    return (
                                      <>
                                        <div
                                          key={`${index}-${element}`}
                                          className="px-[10px] py-[5px] flex items-center gap-x-[5px] bg-[#605BFF] w-fit rounded-[4px] "
                                        >
                                          <div
                                            className={`${figtree.className} font-[600] text-white text-[10px] leading-[16px] uppercase `}
                                          >
                                            {element}
                                          </div>
                                          <svg
                                            className="cursor-pointer"
                                            onClick={(): void =>
                                              handleTagFilter(item.id, element)
                                            }
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                          >
                                            <path
                                              d="M5 5L8 8M8 8L5 11M8 8L11 11M8 8L11 5"
                                              stroke="white"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                            />
                                          </svg>
                                        </div>
                                      </>
                                    );
                                  }
                                )}
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Index;
