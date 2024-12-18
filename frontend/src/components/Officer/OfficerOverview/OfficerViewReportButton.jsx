import { BUTTON_VIEW_REPORT } from "../../../libs/constant";
import Button from "../../Button";
import { useNavigate } from 'react-router-dom';


const OfficerViewReportButton = ({id}) => {
  const navigate = useNavigate();
  function onClickButton() {
      navigate(`/officerReport/${id}`);
  }
  return (
    <div className="flex justify-between">
        <Button
        title="ViewReport"
        backgroundColor="secondary"
        textColor="white"
        onClickFunction={onClickButton}
      />
    </div>
  );
};
export default OfficerViewReportButton;
