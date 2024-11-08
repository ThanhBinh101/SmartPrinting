import Button from "../Button";
import PopupBackground from "./PopupBackground";

const ConfirmPopup = () => {
  return (
    <PopupBackground backgroundColor="secondary">
      <div className="flex h-full flex-col items-center justify-between text-white">
        <div>This file will cost</div>
        <div className="">
          <span className="text-[38px] font-bold">10</span> papers
        </div>
        <div className="underline">
          Available Paper: <span>50</span>
        </div>
        <div className="flex gap-[100px] justify-center"> 
          <Button
            title={"Cancel"}
            backgroundColor={"thirdary"}
            textColor={"secondary"}
          />
          <Button
            title={"Print"}
            backgroundColor={"success"}
            textColor={"white"}
          />
        </div>
      </div>
    </PopupBackground>
  );
};
export default ConfirmPopup;
