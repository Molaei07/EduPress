/* eslint-disable react/prop-types */
const CourseView1 = ({ tag, onwerCourse, name, time, students, date, offPrice, originalPrice, picture, description }) => {
    return (
        <li className="h-auto w-[32%] border border-solid border-gray-200 rounded-2xl flex flex-wrap overflow-hidden hoverItems slowMotion group">
            <div className="h-1/2 w-full relative">
                <img className="w-full h-full" src={"./images/" + picture} alt="Logo" />
                <div className={`${tag ? "block" : "hidden"} bg-black text-white text-sm lg:text-base font-JostMedium rounded-lg absolute left-2 lg:left-4 top-2 lg:top-4 p-1 lg:p-2`}>Photography</div>
            </div>
            <div className="w-full h-1/2 flex flex-wrap p-2 lg:p-4">
                <span className={`${onwerCourse === '' ? "hidden" : "block"} text-xs lg:text-sm text-gray-500 font-JostRegular py-0.5 lg:py-2`}>by <span className="text-black">{onwerCourse}</span></span>
                <h1 className="w-full font-ExoSemiBold text-sm lg:text-xl slowMotion group-hover:text-orange-500">{name}</h1>
                <div className="w-full py-1 lg:py-4 flex items-center gap-x-4">
                    <div className={`${time === '' ? "hidden" : "flex"} items-center gap-x-2`}>
                        <div className="w-3.5 h-3.5">
                            <img className="w-full h-full" src="./images/Group(7).png" alt="Logo" />
                        </div>
                        <span className="text-xs text-gray-700 font-JostRegular">{time}Weeks</span>
                    </div>
                    <div className={`${students === '' ? "hidden" : "flex"} items-center gap-x-2`}>
                        <div className="w-4 h-3">
                            <img className="w-full h-full" src="./images/Vector.png" alt="Logo" />
                        </div>
                        <span className="text-xs text-gray-700 font-JostRegular">{students} Students</span>
                    </div>
                    <div className={`${date === '' ? "hidden" : "flex"} items-center gap-x-2`}>
                        <div className="w-3.5 h-3.5">
                            <img className="w-full h-full" src="./images/date.png" alt="Logo" />
                        </div>
                        <span className="font-JostRegular text-xs lg:text-sm text-slate-400">{date}</span>
                    </div>
                </div>
                <div className={`${originalPrice === '' ? "hidden" : "flex"} w-full justify-between border-t border-solid border-gray-200 lg:py-3`}>
                    <div className="w-fit flex items-end gap-x-2">
                        <span className="text-gray-500 text-sm line-through font-JostRegular">${offPrice}</span>
                        <span className={`${originalPrice == 0 ? "text-green-500" : "text-red-500"} font-JostRegular text-sm`}>{originalPrice == 0 ? "Free" : originalPrice}</span>
                    </div>
                    <button className="font-JostMedium text-xs lg:text-sm">View More</button>
                </div>
                <p className={`${description === '' ? "hidden" : "block"} font-JostRegular text-slate-400 text-xs lg:text-sm`}>{description}</p>
            </div>
        </li>
    );
}

export default CourseView1;