import { Routes, Route } from "react-router-dom";
import Layout from "../layout/layout";
import { Home } from "../layout/homePage/home";

const RouterApp = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    );
}

export default RouterApp;