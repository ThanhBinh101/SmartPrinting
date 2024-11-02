import { BUTTON_CANCEL } from "../../../libs/constant"
import Button from "../../Button";

const CancelButton = () => {
  return (
    <div className="flex justify-between">
      {BUTTON_CANCEL.map((button) => (
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
export default CancelButton;
