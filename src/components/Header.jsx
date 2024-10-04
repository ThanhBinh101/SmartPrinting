const Header = () => {
  return (
    <div>
      <div className="flex bg-primary px-10 py-3 justify-between">
        <div className="w-[60px] aspect-square">
          <img src="/logo-school.png" alt="" />
        </div>
        <div className="w-[60px] aspect-square">
          <img src="/user-logo.svg" alt="" />
        </div>
      </div>
      {/* Chỉnh sửa sau */}
      <div className="bg-secondary h-14"></div>
    </div>
  );
};
export default Header;
