import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Sidebar() {
    return (
        <div className="flex flex-col h-full bg-white">
            <div className="flex-3 flex flex-col items-center justify-center">
                <Navbar />
            </div>
            <div className="flex-1">
                <Footer />
            </div>
        </div>
    )
}
