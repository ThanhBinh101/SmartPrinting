import { FaTriangleExclamation } from "react-icons/fa6";
import PopupBackground from "./PopupBackground";
import Button from "../Button";

const NotAvailableFilePopup = () => {
  return (
    <PopupBackground backgroundColor="secondary">
      <div className="flex h-full flex-col items-center justify-between text-white">
        <FaTriangleExclamation className="text-[100px]" />
        <div className="text-[40px]">This file is not available!!!</div>
        <div className="flex justify-center gap-[100px]">
          <Button
            title={"Cancel"}
            backgroundColor={"thirdary"}
            textColor={"secondary"}
          />
          <Button
            title={"Try again"}
            backgroundColor={"success"}
            textColor={"white"}
          />
        </div>
      </div>
    </PopupBackground>
  );
};
export default NotAvailableFilePopup;
