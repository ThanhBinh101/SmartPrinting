import { BUTTON_USER_OVERVIEW } from "../../libs/constant";
import Button from "../Button";

const UserOverviewButtonList = () => {
  return (
    <div className="flex justify-between">
      {BUTTON_USER_OVERVIEW.map((button) => (
        <Button
          key={button.title}
          title={button.title}
          textColor={button.textColor}
          backgroundColor={button.backgroundColor}
          width={"60"}
        />
      ))}
    </div>
  );
};
export default UserOverviewButtonList;
