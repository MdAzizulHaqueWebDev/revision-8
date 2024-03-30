import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const RootComponent = () => {
    // const navigation = useNavigation();
    return (
        <section className="container mx-auto">
            <div>
            <Navbar></Navbar>
            </div>
            <div>
         <Outlet></Outlet>
            </div>
        </section>
    );
};

export default RootComponent;