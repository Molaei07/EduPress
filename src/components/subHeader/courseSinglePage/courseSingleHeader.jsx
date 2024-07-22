/* eslint-disable react/prop-types */
import { useTranslation } from 'react-multi-lang';
import CourseStatistics from '../../courseItems/courseStatistics/courseStatistics'

const CourseSingleHeader = ({ electiveCourse, language }) => {
    const translate = useTranslation()
    
    return (
        <div className="paddingLayout w-full bg-black py-10 flex justify-center sm:justify-start flex-wrap sm:flex-nowrap gap-y-4 sm:gap-y-0 gap-x-8 items-center relative">
            <div className="w-full sm:w-[70%] flex flex-wrap gap-y-2 sm:gap-y-4">
                <div className="flex gap-x-3 lg:gap-x-5 items-center">
                    <div className="p-1 sm:p-2 text-xs lg:text-sm rounded-md bg-zinc-600 text-white font-JostMedium">{electiveCourse.tag}</div>
                    <span className="text-xs lg:text-sm text-zinc-400 font-JostRegular">{translate("courseItems.by")} <span className="text-white font-JostMedium">{electiveCourse.owner}</span></span>
                </div>
                <h1 className="w-full text-xl sm:text-3xl lg:text-4xl text-white font-ExoSemiBold">{electiveCourse.name}</h1>
                <ul className="w-full h-auto lg:h-6 flex flex-wrap lg:flex-nowrap gap-y-4 gap-x-5 lg:gap-x-10 items-center text-gray-500 font-JostRegular">
                    <CourseStatistics info={electiveCourse.time} picture={'Group(7).png'} name={`${electiveCourse.time} ${translate("courseItems.weeks")}`} />
                    <CourseStatistics info={electiveCourse.students} picture={'Vector.png'} name={`${electiveCourse.students} ${translate("courseItems.students")}`} />
                    <CourseStatistics info={electiveCourse.level} picture={'level.png'} name={`${electiveCourse.level} ${translate("courseItems.levels")}`} />
                    <CourseStatistics info={electiveCourse.lessons} picture={'lessons.png'} name={`${electiveCourse.lessons} ${translate("courseItems.lessons")}`} />
                    <CourseStatistics info={electiveCourse.quizzes} picture={'quizze.png'} name={`${electiveCourse.quizzes} ${translate("courseItems.quizzes")}`} />
                </ul>
            </div>
            <div className={`w-4/5 h-64 sm:w-[270px] flex flex-wrap overflow-hidden border border-gray-200 2xl:absolute rounded-xl -bottom-20 ${language === false ? "right-48" : "left-48"}`}>
                <div className="w-full h-3/4 bg-slate-100">
                    <img className="w-full h-full" src={`../../../public/images/${electiveCourse.picture}`} alt="" />
                </div>
                <div className="w-full h-1/4 flex items-center justify-center gap-x-8 p-4 bg-white">
                    <div className="flex gap-x-1 items-center">
                        <span className="text-gray-400 font-JostMedium text-xs line-through">${electiveCourse.offPrice}</span>
                        <span className={`${electiveCourse.originalPrice === 0 ? 'text-green-600' : 'text-red-600'} font-ExoSemiBold`}>{electiveCourse.originalPrice === 0 ? `${translate("courseItems.Free")}` : electiveCourse.originalPrice}</span>
                    </div>
                    <button className="orangeButton text-xs lg:text-sm h-fit">{translate("courseItems.start")}</button>
                </div>
            </div>
        </div>
    );
}

export default CourseSingleHeader;