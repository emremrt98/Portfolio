import { Link } from "react-router-dom"
import { IoHome, IoPerson, IoList, IoBriefcase, IoReceipt } from "react-icons/io5";


export default function Navbar() {
    return (
        <div className="">
            <header className="header mb-[70px]">
                <h1 className="font-bold text-primary text-[40px]">Makro Beyin</h1>
            </header>
            <nav>
                <ul className="flex flex-col gap-[30px]">
                    <li className="border-b-[1px] pb-3">
                        <Link className="flex items-center gap-[7px] text-primary px-12">
                            <IoHome size={24} />
                            <span className="text-[20px] font-medium">Anasayfa</span>
                        </Link>
                    </li>
                    <li className="border-b-[1px] pb-3">
                        <Link className="flex items-center gap-[7px] text-primary px-12">
                            <IoPerson size={24} />
                            <span className="text-[20px] font-medium">Hakkımızda</span>
                        </Link>
                    </li>
                    <li className="border-b-[1px] pb-3">
                        <Link className="flex items-center gap-[7px] text-primary px-12">
                            <IoList size={24} />
                            <span className="text-[20px] font-medium">Hizmetlerim</span>
                        </Link>
                    </li>
                    <li className="border-b-[1px] pb-3">
                        <Link className="flex items-center gap-[7px] text-primary px-12">
                            <IoBriefcase size={24} />
                            <span className="text-[20px] font-medium">Portfolyom</span>
                        </Link>
                    </li>
                    <li className="border-b-[1px] pb-3">
                        <Link className="flex items-center gap-[7px] text-primary px-12">
                            <IoReceipt size={24} />
                            <span className="text-[20px] font-medium">İletişim</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
