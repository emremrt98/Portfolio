import { createBrowserRouter } from "react-router-dom";
import MasterLayout from "../layout/MasterLayout";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MasterLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "/about",
                element: <AboutPage />
            }
        ]
    },

    {
        path: "*",
        element: <div>404 Sayfasına Hoşgeldiniz</div>
    }

]);