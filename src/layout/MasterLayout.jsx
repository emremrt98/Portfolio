import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import '../styles/main.css';

export default function MasterLayout() {
    return (
        <div className="flex h-full">
            <div className="layout-sidebar">
                <Sidebar />
            </div>
            <div className="layout-main">
                <Outlet />
            </div>
        </div>
    )
}
