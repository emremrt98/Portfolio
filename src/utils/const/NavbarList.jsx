import { IoHome, IoPerson, IoList, IoBriefcase, IoReceipt } from "react-icons/io5";

export const navbarList = [
    {
        url: '/',
        title: "Ana Sayfa",
        icon: <IoHome size={24} />
    },
    {
        url: '/about',
        title: "Hakkımızda",
        icon: <IoPerson size={24} />
    },
    {
        url: '/service',
        title: "Hizmetlerim",
        icon: <IoList size={24} />
    },
    {
        url: 'portfolio',
        title: "Portfolyom",
        icon: <IoBriefcase size={24} />
    },
    {
        url: 'contact',
        title: "İletişim",
        icon: <IoReceipt size={24} />
    }
]