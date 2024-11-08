import Button from "../Button";
import PopupBackground from "./PopupBackground";
import { FaTriangleExclamation } from "react-icons/fa6";

const NotEnoughPaperPopup = () => {
  return (
    <PopupBackground backgroundColor="secondary">
      <div className="flex h-full flex-col justify-between text-white items-center">
        <FaTriangleExclamation className="text-[100px]" />
        <div className="text-[40px]">NOT ENOUGH PAPER</div>
        <div className="flex justify-center gap-[100px]">
          <Button
            title={"Cancel"}
            backgroundColor={"thirdary"}
            textColor={"secondary"}
          />
          <Button
            title={"Buy more"}
            backgroundColor={"success"}
            textColor={"white"}
          />
        </div>
      </div>
    </PopupBackground>
  );
};
export default NotEnoughPaperPopup;
