import { Outlet } from "react-router-dom";
import NavBar from "../../../Components/NavBar";

const Root = () => {
    return (
        <div>
            <h2>This is root</h2>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;