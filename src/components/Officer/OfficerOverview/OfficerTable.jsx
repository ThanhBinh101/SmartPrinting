import React from 'react';
import { useNavigate } from 'react-router-dom';

const OfficerTable = ({ title, tableCol, bgColor, titleColor, rowTextColor }) => {

  return (
    <div>
       <div className="text-[32px] font-inter font-medium text-center mb-[10px]" style={{ color: titleColor }}>
        {title}
      </div>
      <div className={`bg-${bgColor} p-[40px] border-[2px] border-secondary rounded-[20px]`}>
        <table className="w-full border-collapse text-[16px]">
          <thead>
            <tr className="border-b-[2px] border-secondary" style={{ color: rowTextColor }}>
              {tableCol.map((item, index) => (
                <th 
                  className={`p-3 ${index + 1 === tableCol.length ? "" : "border-r-[2px] border-secondary"}`} 
                  key={item}
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-[2px] border-[#F7BCD6] " style={{ color: rowTextColor }}>
              <td className="p-3 border-r-[2px] border-secondary">1</td>
              <td className="p-3 border-r-[2px] border-secondary">1</td>
              <td className="p-3 border-r-[2px] border-secondary">1</td>
              <td className="p-3 border-r-[2px] border-secondary">1</td>
              <button className="ml-1 p-3">
                <img src="/Eye_fill.svg" alt="View" />
              </button>
            </tr>
            <tr className="border-b-[2px] border-[#F7BCD6]" style={{ color: rowTextColor }}>
              <td className="p-3 border-r-[2px] border-secondary">1</td>
              <td className="p-3 border-r-[2px] border-secondary">1</td>
              <td className="p-3 border-r-[2px] border-secondary">1</td>
              <td className="p-3 border-r-[2px] border-secondary">1</td>
              <button className="ml-1 p-3">
                <img src="/Eye_fill.svg" alt="View" />
              </button>
            </tr>
            <tr className="border-b-[2px] border-[#F7BCD6]" style={{ color: rowTextColor }}>
              <td className="p-3 border-r-[2px] border-secondary">1</td>
              <td className="p-3 border-r-[2px] border-secondary">1</td>
              <td className="p-3 border-r-[2px] border-secondary">1</td>
              <td className="p-3 border-r-[2px] border-secondary">1</td>
              <button className="ml-1 p-3">
                <img src="/Eye_fill.svg" alt="View" />
              </button>
            </tr>
            <tr className="border-b-[2px] border-[#F7BCD6]" style={{ color: rowTextColor }}>
              <td className="p-3 border-r-[2px] border-secondary">1</td>
              <td className="p-3 border-r-[2px] border-secondary">1</td>
              <td className="p-3 border-r-[2px] border-secondary">1</td>
              <td className="p-3 border-r-[2px] border-secondary">1</td>
              <button className="ml-1 p-3">
                <img src="/Eye_fill.svg" alt="View" />
              </button>
            </tr>
            <tr className="border-b-[2px] border-[#F7BCD6]" style={{ color: rowTextColor }}>
              <td className="p-3 border-r-[2px] border-secondary">1</td>
              <td className="p-3 border-r-[2px] border-secondary">1</td>
              <td className="p-3 border-r-[2px] border-secondary">1</td>
              <td className="p-3 border-r-[2px] border-secondary">1</td>
              <button className="ml-1 p-3">
                <img src="/Eye_fill.svg" alt="View" />
              </button>
            </tr>
            <tr className="border-b-[2px] border-[#F7BCD6]" style={{ color: rowTextColor }}>
              <td className="p-3 border-r-[2px] border-secondary">1</td>
              <td className="p-3 border-r-[2px] border-secondary">1</td>
              <td className="p-3 border-r-[2px] border-secondary">1</td>
              <td className="p-3 border-r-[2px] border-secondary">1</td>
              <button className="ml-1 p-3">
                <img src="/Eye_fill.svg" alt="View" />
              </button>
            </tr>
            <tr className="border-b-[2px] border-secondary" style={{ color: rowTextColor }}>
              <td className="p-3 border-r-[2px] border-secondary">1</td>
              <td className="p-3 border-r-[2px] border-secondary">1</td>
              <td className="p-3 border-r-[2px] border-secondary">1</td>
              <td className="p-3 border-r-[2px] border-secondary">1</td>
              <button className="ml-1 p-3">
                <img src="/Eye_fill.svg" alt="View" />
              </button>
            </tr>
            <tr>
              <td colSpan={tableCol.length} className="p-[1px]"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OfficerTable;
