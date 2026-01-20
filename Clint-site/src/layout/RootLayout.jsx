import { Outlet } from "react-router-dom";

function RootLayout() {
    return (
        <div className="min-h-screen bg-base-200">
            <Outlet />
        </div>
    );
}

export default RootLayout;