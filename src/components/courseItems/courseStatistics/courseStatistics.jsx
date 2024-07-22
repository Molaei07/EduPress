/* eslint-disable react/prop-types */
const CourseStatistics = ({ info, picture, name }) => {
    return (
        <li className={`${info ? 'flex' : 'hidden'} w-auto lg:w-auto items-center gap-x-1 lg:gap-x-2`}>
            <div className="w-2.5 md:w-3.5">
                <img className="w-full h-full" src={"../../../../public/images/" + picture} alt="Logo" />
            </div>
            <span className="text-xs md:text-sm lg:text-base dark:text-white font-JostRegular">{name}</span>
        </li>
    );
}

export default CourseStatistics;