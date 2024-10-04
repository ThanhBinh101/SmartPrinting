import WaitPrintingTable from "../WaitPrintingTable";
import UserAvatar from "./UserAvatar";
import UserOverviewButtonList from "./UserOverviewButtonList";
import UserRefillAnnoucement from "./UserRefillAnnoucement";

const UserOverview = () => {
  return (
    <div className="mt-[80px] flex justify-center items-center">
      <div className="w-[1454px] bg-thirdary p-[45px] rounded-[25px] flex justify-between gap-[100px] mb-[120px]">
        <UserAvatar
          imageUrl={"/user-logo-big.svg"}
          username={"Nguyễn Thanh Bình"}
          userId={"2252083"}
        />

        <div className="flex-1 text-[28px] flex flex-col justify-between">
          <h3 className="font-bold">
            Page(s) available: <span className="text-secondary">10</span>
          </h3>

          <WaitPrintingTable />

          <UserOverviewButtonList />

          <UserRefillAnnoucement
            remainingDay={10}
            refillDate={"January 10th, 2024"}
          />
        </div>
      </div>
    </div>
  );
};
export default UserOverview;
