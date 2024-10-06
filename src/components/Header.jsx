import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between bg-primary px-10 py-3">
        <div className="aspect-square w-[60px]">
          <Link to={"/"}>
            <img src="/logo-school.png" alt="" />
          </Link>
        </div>
        <div className="aspect-square w-[60px]">
          <img src="/user-logo.svg" alt="" />
        </div>
      </div>
      {/* Chỉnh sửa sau */}
      <div className="h-14 bg-secondary"></div>
    </div>
  );
};
export default Header;
