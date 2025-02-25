import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";

const MainLayout = () => {
    return (
        <div className="max-w-11/12 mx-auto bg-gray-100">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;