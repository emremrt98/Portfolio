import { useState } from "react";
import { AiFillLinkedin, AiFillInstagram, AiFillMediumSquare, AiFillYoutube } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { IoChevronDownOutline } from "react-icons/io5";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
export default function Footer() {
    const [darkMode, setDarkMode] = useState(false);
    const [openLang, setOpenLang] = useState(false);
    const changeMode = (e) => {
        setDarkMode(!darkMode);
        const dataColor = e.currentTarget.children[0].dataset?.mode;
        const body = document.querySelector('body');
        body.className = dataColor;
    }
    const changeLangPopup = () => {
        setOpenLang(!openLang);
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
                <div className="relative flex-1">
                    {
                        openLang &&
                        <ul className="absolute bottom-10 z-10 shadow-lg rounded-[3px] p-[16px]   left-0 w-full bg-white">
                            <li className="hover:bg-[#f1f3f5] bg-[#f8f9fa] cursor-pointer">Türkçe</li>
                            <li className="hover:bg-[#f1f3f5] cursor-pointer">İngilizce</li>
                        </ul>
                    }
                    <div onClick={changeLangPopup} className="flex items-center gap-[7px] text-primary cursor-pointer">
                        <span>Türkçe</span>
                        <IoChevronDownOutline />
                    </div>
                </div>
                <div onClick={changeMode} className="text-primary flex-1 flex justify-end">
                    {
                        darkMode
                            ?
                            <MdOutlineLightMode data-mode='light' size={36} />
                            :
                            <MdDarkMode data-mode='dark' size={36} />
                    }
                </div>
            </div>
        </div>
    )
}
