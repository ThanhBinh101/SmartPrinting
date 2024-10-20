import React from 'react';
import Table from "../../../Officer/Table"
const StudentReport = () => {
  return (
    <div>
      <div className="flex items-center ml-[150px] mt-[30px] w-full h-full"> 
        <div className =" w-[900px] h-full"> 
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
              ["1", "1", "1","1","1"],
              ["1", "1", "1","1","1"],
              ["1", "1", "1","1","1"],
            ]}
            bgColor={'#FFEEE8'}
            titleColor={'black'}
            rowTextColor={'#A68BC1'}
            maxHeight="686px"
          /> 
        </div>
        
        <div className="ml-[100px] w-[500px] h-full mr-[150px]"> 
          <Table  
            title={<span className="text-lg font-semibold">{`Purchase History`}</span>} 
            tableCol={["Date", "Number of Paper", "Total"]} 
            tableRow={[
              ["1","1","1"],
              ["1","1","1"],
              ["1","1","1"],
              ["1","1","1"],
              ["1","1","1"],
              ["1","1","1"],
              ["1","1","1"],
              ["1","1","1"],
              ["1","1","1"],
              ["1","1","1"],
              ["1","1","1"],
              ["1","1","1"],
              ["1","1","1"],
              ["1","1","1"],
              ["1","1","1"],
              ["1","1","1"],
              ["1","1","1"],
              ["1","1","1"],
              ["1","1","1"],
              ["1","1","1"],
            ]}
            bgColor={'#F7BCD61A'}  
            titleColor={'black'}
            rowTextColor={'#A68BC1'}
            maxHeight="686px"
          /> 
        </div>

      </div>
    </div>
  );
};

export default StudentReport;
