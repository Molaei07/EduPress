import { Navigate, useRoutes } from "react-router-dom";
// Layout
import Layout from "../layout/layout";
// Pages
import Home from "../pages/homePage/home"
import AllCoursePage from "../pages/coursesPage/allCoursePage";
import CourseSingle from "../pages/coursesSinglePage/courseSingle";
// Tabs in course single
import Overview from "../components/tabCourseSingle/tabContent/overview";
import Curriculum from "../components/tabCourseSingle/tabContent/curriculum";
import Instructor from "../components/tabCourseSingle/tabContent/instructor";
import Faq from "../components/tabCourseSingle/tabContent/faqs";
import Reviews from "../components/tabCourseSingle/tabContent/reviews";

const RouterApp = () => {
    const router = useRoutes([
        {
            path: "/",
            element: <Layout />,
            children: [
                { index: true, element: <Home />, },
                { path: "/home", element: <Navigate to={"/"} /> },
                {
                    path: "/courses",
                    children: [
                        { index: true, element: <AllCoursePage /> },
                        {
                            path: ":id",
                            element: <CourseSingle />,
                            children: [
                                { path: "overview", element: <Overview /> },
                                { path: "curriculum", element: <Curriculum /> },
                                { path: "instructor", element: <Instructor /> },
                                { path: "faqs", element: <Faq /> },
                                { path: "reviews", element: <Reviews /> }
                            ]
                        }
                    ]
                }
            ]
        }
    ])

    return router
}

export default RouterApp;