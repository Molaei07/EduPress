/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import FilterPanel from "../../components/filterPanel/filterPanel";
import { Courses, CoursesFa } from "../../data/courses/courses";
import AllCourseGrid from "../../components/gridViews/course/allCourseGrid/allCourseGrid";
import AllCourseHeader from "../../components/subHeader/coursesPage/allCourseHeader";
import { useLocation, useOutletContext } from "react-router-dom";
import Breakcrumb from "../../layout/breakcrumb/breakcrumb";

const AllCoursePage = () => {
    const [view, setView] = useState('view1')
    const [newList, setNewList] = useState([])
    const lang = useOutletContext()

    useEffect(() => {
        if (newList.length === 0) {
            if (lang === false) {
                setNewList(Courses)
            } else {
                setNewList(CoursesFa)
            }
        }
    }, [newList])

    const location = useLocation()

    return (
        <>
            <Breakcrumb crumb={location.pathname} crumbName={"Courses"} />
            <div className="w-full flex gap-x-4 paddingLayout">
                <div className="w-full h-fit lg:w-[80%] flex flex-wrap justify-center">
                    <AllCourseHeader setView={setView} set={setNewList} language={lang} />
                    <AllCourseGrid view={view} data={newList} />
                </div>
                {/* Filter */}
                <FilterPanel set={setNewList} language={lang} />
            </div>
        </>
    );
}

export default AllCoursePage;