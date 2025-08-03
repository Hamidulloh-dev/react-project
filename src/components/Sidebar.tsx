import dashboard from "../assets/dashboard.svg"
import { RxDashboard } from "react-icons/rx";
import { IoLayers } from "react-icons/io5";
import { FaCalendar } from "react-icons/fa6";
import { BsAirplaneFill } from "react-icons/bs";
import { PiUsersFill } from "react-icons/pi";
import { TbMessageCircleFilled } from "react-icons/tb";
import { FaRegFolderOpen } from "react-icons/fa6";

const Sidebar = () => {
    return <aside className="flex flex-col bg-white w-[200px] h-[1265px] ml-3">
        <div>
            <div>
                <img src="/Companys logo.svg" alt="" />
            </div>
            <ul className="list-none left-0">
                <li>
                    <RxDashboard />
                    <a href="#">Dashboard</a>
                </li>
                <li>
                    <IoLayers />
                    <a href="#">Projects</a>
                </li>
                <li>
                    <FaCalendar />
                    <a href="#">Calendar</a>
                </li>
                <li>
                    <BsAirplaneFill />
                    <a href="#">Vacations</a>
                </li>
                <li>
                    <PiUsersFill />
                    <a href="#">Employees</a>
                </li>
                <li>
                    <TbMessageCircleFilled />
                    <a href="#">Messanger</a>
                </li>
                <li>
                    <FaRegFolderOpen />
                    <a href="#">Info Portal</a>
                </li>
            </ul>
        </div>
        <div>
            <img src="" alt="" />
            <button></button>
        </div>
    </aside>
}
export default Sidebar