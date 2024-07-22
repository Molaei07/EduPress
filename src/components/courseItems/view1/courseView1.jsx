import { useTranslation } from "react-multi-lang";
import CourseStatistics from "../courseStatistics/courseStatistics";
import ViewMoreBtn from "../viewMoreBtn";

/* eslint-disable react/prop-types */
const CourseView1 = ({ language, id, viewInfo, tag, onwerCourse, name, time, students, date, offPrice, originalPrice, picture, description }) => {
    const translate = useTranslation()
    return (
        <div className={`${viewInfo === 'view1' ? 'w-[48%]' : 'w-[32%]'} pb-2 sm:pb-0 h-auto border border-solid dark:border-gray-400 border-gray-200 rounded sm:rounded-2xl flex flex-wrap overflow-hidden hoverItems slowMotion group`}>
            <div className="h-1/2 w-full relative">
                <img className="w-full h-full" src={"./images/" + picture} alt="Logo" />
                <div className={`${tag ? "block" : "hidden"} bg-black text-white text-xs sm:text-sm font-JostMedium rounded-lg absolute ${language === false ? "left-2 lg:left-4 lg:text-base" : "right-2 lg:right-4 lg:text-xl"} top-2 lg:top-4 p-1 lg:p-2`}>{tag}</div>
            </div>
            <div className="w-full h-1/2 flex flex-wrap p-2 lg:p-4">
                <span className={`${onwerCourse === '' ? "hidden" : "block"} text-[9px] sm:text-xs lg:text-sm dark:text-gray-400 text-gray-500 font-JostRegular py-0.5 lg:py-2`}>{translate("courseItems.by")} <span className="text-black dark:text-white">{onwerCourse}</span></span>
                <h1 className="w-full font-ExoSemiBold text-xs dark:text-white sm:text-sm lg:text-xl slowMotion group-hover:text-orange-500">{name}</h1>
                <div className="w-full py-1 lg:py-4 flex items-center gap-x-4">
                    <CourseStatistics info={time} picture={"Group(7).png"} name={`${time} ${translate("courseItems.weeks")}`} />
                    <CourseStatistics info={students} picture={"Vector.png"} name={`${students} ${translate("courseItems.students")}`} />
                    <CourseStatistics info={date} picture={"date.png"} name={date} />
                </div>
                <div className={`${originalPrice === '' ? "hidden" : "flex"} w-full justify-between border-t border-solid border-gray-200 lg:py-3`}>
                    <div className="w-fit flex items-end gap-x-2">
                        <span className="text-gray-500 text-xs sm:text-sm line-through font-JostRegular">${offPrice}</span>
                        <span className={`${originalPrice == 0 ? "text-green-500" : "text-red-500"} font-JostRegular text-xs sm:text-sm`}>{originalPrice == 0 ? `${translate("courseItems.Free")}` : originalPrice}</span>
                    </div>
                    <ViewMoreBtn id={id} />
                </div>
                <p className={`${description === '' ? "hidden" : "block"} font-JostRegular text-slate-400 text-xs lg:text-sm`}>{description}</p>
            </div>
        </div>
    );
}

export default CourseView1;