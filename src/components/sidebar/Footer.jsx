import { useState } from "react";
import { AiFillLinkedin, AiFillInstagram, AiFillMediumSquare, AiFillYoutube } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { IoChevronDownOutline } from "react-icons/io5";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
export default function Footer() {
    const [darkMode, setDarkMode] = useState(false);
    const changeMode = () => {
        setDarkMode(!darkMode)
    }

    return (
        <div>
            <ul className="flex justify-between mx-[30px] py-[30px] border-b-[1px]">
                <li>
                    <a target="_blank" href="#">
                        <AiFillLinkedin size={32} color="#343A40" />

                    </a>
                </li>
                <li>
                    <a target="_blank" href="#">
                        <AiFillInstagram size={32} color="#343A40" />
                    </a>
                </li>
                <li>
                    <a target="_blank" href="#">
                        <BsTwitterX size={32} color="#343A40" />
                    </a>
                </li>
                <li>
                    <a target="_blank" href="#">
                        <AiFillMediumSquare size={32} color="#343A40" />
                    </a>
                </li>
                <li>
                    <a target="_blank" href="#">
                        <AiFillYoutube size={32} color="#343A40" />
                    </a>
                </li>
            </ul>

            <div className="flex justify-between mx-[30px] mt-[30px]">
                <div className="flex items-center gap-[7px] text-primary">
                    <span>Türkçe</span>
                    <IoChevronDownOutline />
                </div>
                <div onClick={changeMode} className="text-primary">
                    {
                        darkMode
                            ?
                            <MdOutlineLightMode size={36} />
                            :
                            <MdDarkMode size={36} />
                    }
                </div>
            </div>
        </div>
    )
}
