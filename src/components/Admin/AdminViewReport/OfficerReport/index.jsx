import React from 'react';
import Table from "../../../Officer/Table"
const OfficerReport = () => {
  return (
    <div>
      <div className="flex ml-[150px] mt-[30px] w-full h-full"> 
      <div className =" w-[900px]"> 
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
            maxHeight="686px"
          /> 
        </div>
        
        <div className="ml-[100px] mr-[150px] h-full"> 
          <div className="w-[500px] h-[278px]">
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
              maxHeight="278px"
            />
          </div>
          <div className="mt-[130px] mb-[100px] w-[500px] h-[278px]">
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
              maxHeight={"278px"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficerReport;
