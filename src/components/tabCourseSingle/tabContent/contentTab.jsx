/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";

const ContentTab = ({ electiveCourse }) => {
    return (
        <div className="bg-[#EAEAEA] dark:bg-neutral-900 p-2 sm:p-8 rounded-b-2xl">
            <Outlet context={electiveCourse} />
        </div>
    );
}

export default ContentTab;