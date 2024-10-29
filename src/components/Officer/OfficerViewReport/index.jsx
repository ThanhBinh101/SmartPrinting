import React, { useState } from "react";
import ExportButton from "./ExportButton";

import PrinterViewReportButton from "./PrinterViewReportButton";
import PrinterRefillPaperButton from './PrinterRefillPaperButton';
import PrinterMaintainButton from "./PrinterMaintainButton";
import PrinterList from "./PrinterList"
import Table from "../Table";

const ViewReport = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [studentID, setStudentID] = useState("");

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleStudentIDChange = (e) => {
    setStudentID(e.target.value);
  };

  const handleSearch = () => {
    // Thực hiện tìm kiếm ở đây
    console.log("Searching for:", studentID);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center mt-[30px]">
        <span className="font-Ubuntu font-medium text-[36px]">Report</span>
      </div>

      <div className="flex justify-center mt-[30px]">
        <div className="mt-[10px] mr-[10px]">
          <span className="font-Ubuntu text-[18px]">Search</span>
        </div>
        <div className="relative w-[431px]">
          <input
            type="text"
            placeholder="MSSV của SV"
            className="border border-[#A68BC1] rounded-[16px] p-2 w-full h-[48px]"
            value={studentID}
            onChange={handleStudentIDChange}
            onKeyDown={handleKeyDown} // Bắt sự kiện nhấn phím
          />
          <img
            src="/Search_alt_fill.svg"
            alt="Search icon"
            className="absolute right-[10px] top-1/2 transform -translate-y-[14px] w-6 h-6 cursor-pointer"
            onClick={handleSearch} // Gọi hàm tìm kiếm khi nhấn vào biểu tượng
          />
        </div>
        <div className="ml-[30px] mt-[10px] mr-[10px]">
          <span className="font-Ubuntu text-[18px]">From</span>
        </div>
        <div className="flex justify-center space-x-4">
          <input
            type="date"
            value={startDate}
            onChange={handleStartDateChange}
            className="border bg-[#A68BC133] border-[#A68BC1] rounded-[16px] p-2 w-[180px] h-[48px]"
          />
        </div>
        <div className="ml-[30px] mt-[10px] mr-[10px]">
          <span className="font-Ubuntu text-[18px]">To</span>
        </div>
        <div>
          <input
            type="date"
            value={endDate}
            onChange={handleEndDateChange}
            className="border bg-[#A68BC133] border-[#A68BC1] rounded-[16px] p-2 w-[180px] h-[48px]"
          />
        </div>
        <div className="ml-[50px]">
          <ExportButton />
        </div>
      </div>

      <div className="flex ml-[40px] mr-[50px] mt-[30px] w-full h-full"> 
          <div className=" mt-[20px]">
            <span className="text-[18px] font-inter font-semibold"> Printer List</span>
            <div className="mt-[30px] w-[170px] h-[500px]">
              <PrinterList />
            </div>
          </div>
          <div className="ml-[50px] mt-[30px] mr-[30px] "> 
                <div className="w-[381px] h-[669px] bg-[#FFEEE8] mt-[20px] rounded-[30px] flex justify-center border-2 border-[#A68BC1]">
                    <div className="mt-[50px]"> 
                        <div className="text-2xl font-bold mb-[20px]">
                            <span className="underline">Location:</span> <span className="text-[#A68BC1]"> 305B1</span>
                        </div>
                        <div className="text-2xl font-bold mb-[20px]">
                            <span className="underline">Next maintain day:</span> <span className="text-[#A68BC1]"> Jan 10th</span>
                        </div>
                        <div className="text-2xl font-bold mb-[20px]">
                            <span className="underline">Available paper:</span> <span className="text-[#A68BC1]"> 100</span>
                        </div>
                        <div className="text-2xl font-bold mb-[20px]">
                            <span className="underline">Status:</span> <span className="text-[#A68BC1]"> On</span>
                        </div>
                        <div className="mt-[150px] mb-[50px]">
                          <div className="flex flex-col items-center w-full"> 
                              <div className="bg-[#97D99D] text-xl rounded-[25px] mt-[25px] w-[245px] flex items-center justify-center h-[52px]"> 
                                  <PrinterRefillPaperButton />
                              </div>
                              <div className="bg-[#FEC8D8] text-xl rounded-[25px] mt-[25px] w-[245px] flex items-center justify-center h-[52px]"> 
                                  <PrinterMaintainButton />
                              </div>
                              <div className="bg-[#A68BC1] text-xl rounded-[25px] mt-[25px] w-[245px] flex items-center justify-center h-[52px]"> 
                                  <PrinterViewReportButton />
                              </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
      <div className =" w-[850px]"> 
          <Table  
            title={<span className="text-lg font-semibold">{`Printer History`}</span>} 
            tableCol={["Date", "Finish Day", "File", "Student", "Number of Paper"]} 
            tableRow={[
              ["1", "1", "1","1","1"],
              ["1", "1", "1","1","1"],
              ["1", "1", "1","1","1"],
              ["1", "1", "1","1","1"],
              ["1", "1", "1","1","1"],
              ["1", "1", "1","1","1"],
              ["1", "1", "1","1","1"],
              ["1", "1", "1","1","1"],
              ["1", "1", "1","1","1"],
              ["1", "1", "1","1","1"],
              ["1", "1", "1","1","1"],
              ["1", "1", "1","1","1"],
              ["1", "1", "1","1","1"],
              ["1", "1", "1","1","1"],
              ["1", "1", "1","1","1"],
              ["1", "1", "1","1","1"],
              ["1", "1", "1","1","1"],
              ["1", "1", "1","1","1"]
            ]}
            bgColor={'#F7BCD633'}
            titleColor={'black'}
            rowTextColor={'#A68BC1'}
            maxHeight="586px"
          /> 
        </div>
        
        <div className="ml-[30px] h-full"> 
          <div className="w-[400px] h-[278px]">
            <Table
              className="p-3"
              title={<span className="text-lg font-semibold">{`Maintain History`}</span>} 
              tableCol={["Day", "Status"]} 
              tableRow={[
                ["1", "1"],
                ["1", "1"],
                ["1", "1"],
                ["1", "1"],
                ["1", "1"],
                ["1", "1"],
                ["1", "1"],
                ["1", "1"],
                ["1", "1"],
                ["1", "1"],
                ["1", "1"],
                ["1", "1"],
              ]}
              bgColor={'white'} 
              titleColor={'black'}
              rowTextColor={'#A68BC1'}
              maxHeight="228px"
            />
          </div>
          <div className="mt-[80px] mb-[100px] w-[400px] h-[278px]">
            <Table
              className="p-3"
              title={<span className="text-lg font-semibold">{`Refill History`}</span>} 
              tableCol={["Day", "Status"]} 
              tableRow={[
                ["1", "1"],
                ["1", "1"],
                ["1", "1"],
                ["1", "1"],
                ["1", "1"],
                ["1", "1"],
                ["1", "1"],
                ["1", "1"],
                ["1", "1"],
                ["1", "1"],
                ["1", "1"],
                ["1", "1"],
                ["1", "1"],
                ["1", "1"],
                ["1", "1"],
              ]}
              bgColor="#FFEEE8"
              titleColor={'black'}
              rowTextColor={'#A68BC1'}
              maxHeight={"228px"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewReport;
