import { BUTTON_VIEW_REPORT } from "../../../libs/constant";
import Button from "../../Button";

const AdminViewReportButton = () => {
  return (
    <div className="flex justify-between">
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
export default AdminViewReportButton;
