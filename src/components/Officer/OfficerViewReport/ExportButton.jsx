import { BUTTON_EXPORT } from "../../../libs/constant";
import Button from "../../Button";

const ExportButton = () => {
  return (
    <div className="flex justify-center items-center bg-[#97D99D] w-[190px] h-[52px] text-center text-[24px] rounded-[30px]">
      {BUTTON_EXPORT.map((button) => (
        <Button
          key={button.title}
          title={button.title}
          textColor={button.textColor}
        />
      ))}
    </div>
  );
};

export default ExportButton;
