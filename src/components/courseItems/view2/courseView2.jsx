/* eslint-disable react/prop-types */
import { useTranslation } from "react-multi-lang";
import CourseStatistics from "../courseStatistics/courseStatistics";
import ViewMoreBtn from "../viewMoreBtn";

const CourseView2 = ({ language, id, tag, onwerCourse, name, time, students, level, lesson, date, offPrice, originalPrice, picture, description }) => {
    const translate = useTranslation()
    return (
        <div className="w-full h-auto lg:h-64 rounded-2xl border dark:border-gray-400 border-gray-200 border-solid flex overflow-hidden hoverItems slowMotion group">
            <div className="w-2/5">
                <img className="w-full h-full" src={"./images/" + picture} alt="Logo" />
                <div className={`${tag ? "block" : "hidden"} bg-black text-white text-xs sm:text-sm lg:text-base font-JostMedium rounded-lg absolute ${language === false ? "left-2 lg:left-4" : "right-2 lg:right-4"} top-2 lg:top-4 p-1 lg:p-2`}>{tag}</div>
            </div>
            <div className="p-2 md:p-4 w-3/5 h-full flex flex-wrap gap-y-4 md:gap-y-10 lg:gap-y-16">
                <div className="w-full h-fit flex gap-y-2 md:gap-y-3 flex-wrap">
                    <span className={`${onwerCourse ? 'block' : 'hidden'} w-full text-xs md:text-sm font-JostRegular text-gray-400`}>{translate("courseItems.by")} <span className="font-JostMedium dark:text-white text-black">{onwerCourse}</span></span>
                    <h1 className="font-ExoSemiBold text-sm sm:text-base group-hover:text-orange-500 md:text-xl lg:text-2xl w-full dark:text-white">{name}</h1>
                    <ul className="w-full h-auto lg:h-6 flex flex-wrap lg:flex-nowrap gap-2 items-center text-gray-500 font-JostRegular">
                        <CourseStatistics info={time} picture={'Group(7).png'} name={`${time} ${translate("courseItems.weeks")}`} />
                        <CourseStatistics info={students} picture={'Vector.png'} name={`${students} ${translate("courseItems.students")}`} />
                        <CourseStatistics info={level} picture={'level.png'} name={`${level} ${translate("courseItems.levels")}`} />
                        <CourseStatistics info={lesson} picture={'lessons.png'} name={`${time} ${translate("courseItems.lessons")}`} />
                        <CourseStatistics info={date} picture={'date.png'} name={date} />
                    </ul>
                </div>
                <div className={`${originalPrice === '' ? "hidden" : "flex"} w-full justify-between items-center border-t border-solid border-gray-200`}>
                    <div className="w-fit flex items-end gap-x-2">
                        <span className="text-gray-500 text-xs md:text-sm lg:text-base line-through font-JostRegular">${offPrice}</span>
                        <span className={`${originalPrice == 0 ? "text-green-500" : "text-red-500"} font-JostRegular text-xs md:text-sm lg:text-base`}>{originalPrice == 0 ? `${translate("courseItems.Free")}` : originalPrice}</span>
                    </div>
                    <ViewMoreBtn id={id} />
                </div>
                <p className={`${description === '' ? "hidden" : "block"} font-JostRegular text-slate-400 text-xs lg:text-sm`}>{description}</p>
            </div>
        </div>
    );
}

export default CourseView2;