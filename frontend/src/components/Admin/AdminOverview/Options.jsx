import { useState, useEffect } from "react";
import CancelButton from "./CancelButton";
import ApplyChangesButton from "./ApplyChangesButton";

const Options = ({ adminData }) => {
  const [fileType, setFileType] = useState("");

  // Set initial fileType based on the first available 'true' allow value
  useEffect(() => {
    const allowedFileType = adminData?.format?.find((type) => type.allow === true);
    if (allowedFileType) {
      setFileType(allowedFileType.name); // Set the first allowed type as the default checked option
    }
  }, [adminData]);

  const handleFileTypeChange = (event) => {
    setFileType(event.target.value);
  };

  return (
    <div className="p-5 ml-[100px] w-[1454px]">
      <div className="mb-3 flex items-center">
        <span className="font-normal text-3xl">Next refill in <span className="font-semibold">{adminData.nextRefill}</span> </span>
        {/* <input
          type="text"
          value=""
          style={{ borderColor: '#A68BC1' }}
          className="ml-[10px] border rounded-[10px] w-[275px] h-[48px] px-2 py-1"
        /> */}
        <img src="/Edit_fill.svg" alt="Edit" className="w-[24px] h-[24px]" />
      </div>

      <div className="mb-[20px]">
        <p className="font-medium text-2xl mb-[20px]">Acceptable file type</p>
        <div className="flex items-center space-x-[175px]">
          <div className="flex flex-col space-y-[27px]">
            {adminData?.format?.map((type) => (
              <label key={type.name} className="flex items-center">
                <input
                  type="radio"
                  name="fileType"
                  value={type.name}
                  checked={type.allow}  // Chỉ checked nếu allow === true
                  onChange={handleFileTypeChange} // Không cần value, chỉ cần checked và onChange
                  style={{ borderColor: '#A68BC1' }}
                  disabled={!type.allow} // Disabled nếu allow === false
                  className="appearance-none h-5 w-5 border border-gray-300 rounded-full bg-[#F7BCD6] relative
                    before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:h-3 before:w-3 
                    before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2
                    checked:before:bg-[#A68BC1]"
                />
                <span className="ml-2 text-xl">{type.name}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-6 flex items-center">
        <label className="font-medium text-2xl mr-[40px]">Price</label>
        <span className="font-semibold text-2xl">{adminData.price}</span>
        {/* <input
          type="text"
          value=""
          style={{ borderColor: '#A68BC1' }}
          className="bg-white border rounded-[16px] w-[120px] h-[48px] px-2 py-1 mx-2"
        /> */}
        <span className="font-normal text-2xl">VND /</span>
        {/* <input
          type="text"
          value=""
          style={{ borderColor: '#A68BC1' }}
          className="bg-white border rounded-[16px] w-[120px] h-[48px] px-2 py-1 mx-2"
        /> */}
        <span className="font-semibold text-2xl">{adminData.paper}</span>
        <span className="font-normal text-2xl">Papers</span>
      </div>

      <div className="mb-4">
        <p className="font-medium text-2xl">Available Pay amount</p>
        <div className="grid-cols-5 grid p-0 mt-[10px] w-[670px]">
          {adminData?.purchases?.map((amount, index) => (
            <button
              key={index}
              style={{ borderColor: '#A68BC1' }}
              className="bg-white font-medium border rounded-[16px] w-[120px] h-[48px] px-2 py-1"
            >
              {amount}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center space-x-20 ml-[42px]">
        <div className="bg-[#FEC8D8] text-xl rounded-[25px] mt-[5px] w-[245px] flex items-center justify-center h-[52px]">
          <CancelButton />
        </div>
        <div className="bg-[#97D99D] text-xl rounded-[25px] mt-[5px] w-[245px] flex items-center justify-center h-[52px]">
          <ApplyChangesButton />
        </div>
      </div>
    </div>
  );
};

export default Options;
