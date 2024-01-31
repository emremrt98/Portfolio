import { Outlet } from "react-router-dom";
import Sidebar from "../components/shared/Sidebar";

export default function MasterLayout() {
    return (
        <div>
            <Sidebar />
            <Outlet />
        </div>
    )
}
