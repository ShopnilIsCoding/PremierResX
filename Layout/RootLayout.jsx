import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


const RootLayout = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <div className="w-[92%] lg:w-full mx-auto">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default RootLayout;