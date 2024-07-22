/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useLocation, useParams } from "react-router-dom";
import { Courses, CoursesFa } from "../../data/courses/courses";
import { useState } from "react";
import HeaderTab from "../../components/tabCourseSingle/headerTab";
import ContentTab from "../../components/tabCourseSingle/tabContent/contentTab";
import CommentForm from "../../components/commentForm/comment";
import CourseSingleHeader from "../../components/subHeader/courseSinglePage/courseSingleHeader"
import { useOutletContext } from "react-router-dom";
import Breakcrumb from "../../layout/breakcrumb/breakcrumb";

const CourseSingle = () => {
    const { id } = useParams()
    const [electiveCourse, setElectiveCourse] = useState(useOutletContext() === false ? Courses.filter(obg => obg.id == id) : CoursesFa.filter(obg => obg.id == id))
    const location = useLocation()

    return (
        <>
            <Breakcrumb crumb={location.pathname} crumbName={electiveCourse[0].name} />
            <div className="w-full flex flex-wrap gap-y-8 -mt-20">
                <CourseSingleHeader electiveCourse={electiveCourse[0]} language={useOutletContext()} />
                <div className="w-full paddingLayout">
                    <div className="w-full 2xl:w-[70%] flex flex-wrap gap-y-8">
                        <div className="w-full h-fit">
                            <HeaderTab />
                            <ContentTab electiveCourse={electiveCourse[0]} />
                        </div>
                        <CommentForm />
                    </div>
                </div>
            </div>
        </>
    );
}

export default CourseSingle;