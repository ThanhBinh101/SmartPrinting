// eslint-disable-next-line react/prop-types
const PopupBackground = ({ children, backgroundColor = "fourthdary" }) => {
  const formClass = `h-[450px] w-[600px] rounded-lg bg-${backgroundColor} p-[50px] text-[30px] font-normal`;

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-black bg-opacity-50 shadow-md">
      <div className={formClass}>{children}</div>
    </div>
  );
};
export default PopupBackground;
