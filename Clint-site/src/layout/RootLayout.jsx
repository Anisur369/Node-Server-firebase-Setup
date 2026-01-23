import { Outlet } from "react-router-dom";
import Header from "../pages/header/Header.jsx";
import Footer from "../pages/footer/Footer";

function RootLayout() {
    return (
        <div className="min-h-screen bg-base-200 w-[85%] mx-auto">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default RootLayout;