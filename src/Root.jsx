import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

const Root = () => {
    return (
        <div className="font-custom min-h-screen overflow-x-hidden text-slate-100">
            <NavBar />
            <main className="pt-20">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Root;