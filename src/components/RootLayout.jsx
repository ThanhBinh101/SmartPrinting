import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Popup from "./Popup";
import { useAppContext } from "../hooks/useAppContext";

const RootLayout = () => {
  const { isOpenPopup } = useAppContext();

  return (
    <>
      {isOpenPopup && <Popup />}
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default RootLayout;
