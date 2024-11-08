import Button from "../Button";
import PopupBackground from "./PopupBackground";

const AddPrinterPopup = () => {
  return (
    <PopupBackground>
      <div className="mb-[40px] text-center text-[36px] font-bold text-secondary">
        Thêm máy in
      </div>
      <div className="mb-[40px] flex flex-col gap-5">
        <div className="flex items-center">
          <label htmlFor="position" className="w-7/12">
            Vị trí
          </label>
          <input
            type="text"
            name="position"
            id="position"
            className="w-5/12 rounded-lg border-[1px] border-secondary p-3 outline-none"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="officer" className="w-7/12">
            Nhân viên quản lý
          </label>
          <input
            type="text"
            name="officer"
            id="officer"
            className="w-5/12 rounded-lg border-[1px] border-secondary p-3 outline-none"
          />
        </div>
      </div>

      <div className="flex justify-center gap-[100px]">
        <Button
          title={"Huỷ"}
          backgroundColor={"secondary"}
          textColor={"thirdary"}
        />
        <Button
          title={"Thêm"}
          backgroundColor={"success"}
          textColor={"white"}
        />
      </div>
    </PopupBackground>
  );
};
export default AddPrinterPopup;
