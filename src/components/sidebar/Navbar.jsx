import { Link } from "react-router-dom"
import { IoHome, IoPerson, IoList, IoBriefcase, IoReceipt } from "react-icons/io5";


export default function Navbar() {
    return (
        <div className="bg-white">
            <header>
                <h1>Makro Beyin</h1>
            </header>
            <nav>
                <ul>
                    <li>
                        <Link>
                            <IoHome />
                            <span>Anasayfa</span>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <IoPerson />
                            <span>Hakkımızda</span>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <IoList />
                            <span>Hizmetlerim</span>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <IoBriefcase />
                            <span>Portfolyom</span>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <IoReceipt />
                            <span>İletişim</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
