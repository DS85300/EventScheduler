import { Link,Outlet } from "react-router-dom"
import Navbar from "./Navbar.JSX"


const MainLayout = () => {


    return (
        <>
        <header>
            <Navbar/>
        </header>
        <main>
            <Outlet/>
        </main>
        
        </>
    );
};

export default MainLayout;
