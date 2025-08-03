import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
const RoutLayout = () => {
  return (
    <>
      <div className="flex w-full h-screen">
        <Sidebar />
        <div>
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default RoutLayout;
