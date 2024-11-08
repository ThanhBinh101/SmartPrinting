import Button from "../Button";
import PopupBackground from "./PopupBackground";

const AddPaperPopup = () => {
  return (
    <PopupBackground>
      <div className="flex h-full flex-col justify-between">
        <div className="text-center text-[36px] font-bold text-secondary">
          Thêm giấy
        </div>
        <div className="flex items-center">
          <label htmlFor="quantity" className="w-7/12">
            Số lượng
          </label>
          <input
            type="number"
            name="quantity"
            id="quantity"
            className="w-5/12 rounded-lg border-[1px] border-secondary px-3 py-2 outline-none"
          />
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
      </div>
    </PopupBackground>
  );
};
export default AddPaperPopup;
