import { Outlet } from "react-router-dom";
// import Navbar from "../Components/SharedComponents/Navbar/Navbar";
import ExNav from "../Components/SharedComponents/ExperimentalNav/ExNav";

const Root = () => {
    return (
        <div className="">
            {/* <Navbar></Navbar> */}
            <ExNav/>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;