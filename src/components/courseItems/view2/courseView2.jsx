/* eslint-disable react/prop-types */
import CourseStatistics from "../courseStatistics/courseStatistics";

const CourseView2 = ({ tag, onwerCourse, name, time, students, level, lesson, date, offPrice, originalPrice, picture, description }) => {
    return (
        <div className="w-full h-full lg:h-64 rounded-2xl border border-gray-200 border-solid flex overflow-hidden hoverItems slowMotion group">
            <div className="w-2/5 h-full">
                <img className="w-full h-full" src={"./images/" + picture} alt="Logo" />
                <div className={`${tag ? "block" : "hidden"} bg-black text-white text-xs sm:text-sm lg:text-base font-JostMedium rounded-lg absolute left-2 lg:left-4 top-2 lg:top-4 p-1 lg:p-2`}>{tag}</div>
            </div>
            <div className="p-2 md:p-4 w-3/5 h-full flex flex-wrap gap-y-4 md:gap-y-10 lg:gap-y-16">
                <div className="w-full h-fit flex gap-y-2 md:gap-y-3 flex-wrap">
                    <span className={`${onwerCourse ? 'block' : 'hidden'} w-full text-xs md:text-sm font-JostRegular text-gray-400`}>by <span className="font-JostMedium text-black">{onwerCourse}</span></span>
                    <h1 className="font-ExoSemiBold text-sm sm:text-base md:text-xl lg:text-2xl w-full">{name}</h1>
                    <ul className="w-full h-auto lg:h-6 flex flex-wrap lg:flex-nowrap lg:gap-x-10 items-center text-gray-500 font-JostRegular">
                        <li className={`${time ? 'flex' : 'hidden'} w-1/2 lg:w-auto items-center gap-x-1 lg:gap-x-2`}>
                            <CourseStatistics picture={'Group(7).png'} name={`${time} Week`} />
                        </li>
                        <li className={`${students ? 'flex' : 'hidden'} w-1/2 lg:w-auto items-center gap-x-1 lg:gap-x-2`}>
                            <CourseStatistics picture={'Vector.png'} name={`${students} Students`} />
                        </li>
                        <li className={`${level ? 'flex' : 'hidden'} w-1/2 lg:w-auto items-center gap-x-1 lg:gap-x-2`}>
                            <CourseStatistics picture={'level.png'} name={"All levels"} />
                        </li>
                        <li className={`${lesson ? 'flex' : 'hidden'} w-1/2 lg:w-auto items-center gap-x-1 lg:gap-x-2`}>
                            <CourseStatistics picture={'lessons.png'} name={`${time} Lessons`} />
                        </li>
                        <li className={`${date ? 'flex' : 'hidden'} w-1/2 lg:w-auto items-center gap-x-1 lg:gap-x-2`}>
                            <CourseStatistics picture={'date.png'} name={date} />
                        </li>
                    </ul>
                </div>
                <div className={`${originalPrice === '' ? "hidden" : "flex"} w-full justify-between items-center border-t border-solid border-gray-200`}>
                    <div className="w-fit flex items-end gap-x-2">
                        <span className="text-gray-500 text-xs md:text-sm lg:text-base line-through font-JostRegular">${offPrice}</span>
                        <span className={`${originalPrice == 0 ? "text-green-500" : "text-red-500"} font-JostRegular text-xs md:text-sm lg:text-base`}>{originalPrice == 0 ? "Free" : originalPrice}</span>
                    </div>
                    <button className="font-JostMedium text-xs md:text-sm lg:text-base">View More</button>
                </div>
                <p className={`${description === '' ? "hidden" : "block"} font-JostRegular text-slate-400 text-xs lg:text-sm`}>{description}</p>
            </div>
        </div>
    );
}

export default CourseView2;