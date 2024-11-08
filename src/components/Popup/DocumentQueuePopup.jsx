import PopupBackground from "./PopupBackground";
import { MdCancel } from "react-icons/md";

const DocumentQueuePopup = () => {
  return (
    <PopupBackground>
      <div className="mb-[10px] text-center text-[36px] font-bold text-secondary">
        Danh sách tài liệu
      </div>

      <div className="rounded-lg border-[1px] border-secondary bg-white p-[30px]">
        <table className="w-full border-collapse text-[16px]">
          <thead>
            <tr className="border-b-[2px] border-secondary text-center">
              <th className="border-r-[2px] border-secondary p-2">
                Tên tài liệu
              </th>
              <th className="border-r-[2px] border-secondary p-2">Số trang</th>
              <th className="border-secondary p-2">Huỷ</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-[2px] border-secondary text-center">
              <td className="border-r-[2px] border-secondary p-2">
                deptraicogisai.pdf
              </td>
              <td className="border-r-[2px] border-secondary p-2">10</td>
              <td className="flex items-center justify-center border-secondary p-2 text-[20px] text-secondary">
                <button className="mt-[3px]">
                  <MdCancel />
                </button>
              </td>
            </tr>
            <tr className="border-b-[2px] border-secondary text-center">
              <td className="border-r-[2px] border-secondary p-2">
                deptraicogisai.pdf
              </td>
              <td className="border-r-[2px] border-secondary p-2">10</td>
              <td className="flex items-center justify-center border-secondary p-2 text-[20px] text-secondary">
                <button className="mt-[3px]">
                  <MdCancel />
                </button>
              </td>
            </tr>
            <tr className="border-b-[2px] border-secondary text-center">
              <td className="border-r-[2px] border-secondary p-2">
                deptraicogisai.pdf
              </td>
              <td className="border-r-[2px] border-secondary p-2">10</td>
              <td className="flex items-center justify-center border-secondary p-2 text-[20px] text-secondary">
                <button className="mt-[3px]">
                  <MdCancel />
                </button>
              </td>
            </tr>
            <tr className="text-center">
              <td className="border-r-[2px] border-secondary p-2">
                deptraicogisai.pdf
              </td>
              <td className="border-r-[2px] border-secondary p-2">10</td>
              <td className="flex items-center justify-center border-secondary p-2 text-[20px] text-secondary">
                <button className="mt-[3px]">
                  <MdCancel />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </PopupBackground>
  );
};
export default DocumentQueuePopup;
