import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Header />
            <main className="w-full max-w-screen-2xl mx-auto flex justify-center flex-wrap gap-y-20">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default Layout;