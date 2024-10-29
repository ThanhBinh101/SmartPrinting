import { BUTTON_VIEW_REPORT } from "../../../libs/constant";
import Button from "../../Button";

const PrinterViewReportButton = () => {
  return (
    <div className="flex justify-between bg-[#A68BC1]" >
      {BUTTON_VIEW_REPORT.map((button) => (
        <Button
          key={button.title}
          title={button.title}
          textColor={button.textColor}
          backgroundColor={'button.backgroundColor'}
          width={"60"}
        />
      ))}
    </div>
  );
};

export default PrinterViewReportButton;
