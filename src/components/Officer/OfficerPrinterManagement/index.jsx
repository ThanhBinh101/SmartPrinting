import React from 'react';
import Table from "../Table";
import PrinterViewReportButton from "./PrinterViewReportButton";
import PrinterRefillPaperButton from './PrinterRefillPaperButton';
import PrinterMaintainButton from "./PrinterMaintainButton";

const PrinterManagement = () => {
    return (
        <div className="flex">
            <div className="ml-[50px] mt-[50px]"> 
                <h2 className="text-[36px] font-normal font-[Ubuntu]">Printer 1234</h2>    
                <div className="w-[381px] h-[490px] bg-[#FFEEE8] mt-[20px] rounded-[30px] flex items-center justify-center">
                    <div> 
                        <div className="text-2xl font-bold mb-[20px]">
                            <span className="underline">Location:</span> <span className="text-[#A68BC1]"> 305B1</span>
                        </div>
                        <div className="text-2xl font-bold mb-[20px]">
                            <span className="underline">Next maintain day:</span> <span className="text-[#A68BC1]"> Jan 10th</span>
                        </div>
                        <div className="text-2xl font-bold mb-[20px]">
                            <span className="underline">Available paper:</span> <span className="text-[#A68BC1]"> 100</span>
                        </div>
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

            <div className="ml-[40px] mt-[60px] w-[842px] h-[623px]"> 
                <div className="w-full">
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
                            ["1", "1", "1","1","1"],
                            ["1", "1", "1","1","1"],
                          ]}
                        bgColor="#F7BCD633"
                        titleColor={'black'}
                        rowTextColor={'#A68BC1'}
                        maxHeight="623px"
                    /> 
                </div>
            </div>

            <div className="ml-[40px]">
                <div className ="w-[391px] h-[278px] mt-[60px]">
                    <Table
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
                        maxHeight="245px"
                    />
                </div>
                <div className = "mt-[100px]">
                    <Table
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
                            ["1", "1"],
                            ["1", "1"],
                            ["1", "1"],
                            ["1", "1"],
                          ]}
                        bgColor="#FFEEE8"
                        titleColor={'black'}
                        rowTextColor={'#A68BC1'}
                        maxHeight="245px"
                    />
                </div>
            </div>

        </div>
    )
}

export default PrinterManagement;
