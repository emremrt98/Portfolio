import { NavLink } from "react-router-dom"
import { navbarList } from "../../utils/const/NavbarList"

export default function Navbar() {
    return (
        <div className="">
            <header className="header mb-[70px]">
                <h1 className="font-bold text-primary text-[40px]">Makro Beyin</h1>
            </header>
            <nav>
                <ul className="flex flex-col gap-[30px]">
                    {
                        navbarList.map((item, index) => (
                            <li key={index} className="border-b-[1px] pb-3">
                                <NavLink to={item.url} className="flex items-center gap-[7px] text-primary px-12">
                                    {item.icon}
                                    <span className="text-[20px] font-medium">{item.title}</span>
                                </NavLink>
                            </li>
                        ))
                    }

                </ul>
            </nav>
        </div>
    )
}
