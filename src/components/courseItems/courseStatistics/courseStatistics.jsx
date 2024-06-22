/* eslint-disable react/prop-types */
const CourseStatistics = ({picture, name}) => {
    return (
        <>
            <div className="w-2.5 md:w-3.5">
                <img className="w-full h-full" src={"./images/" + picture} alt="Logo" />
            </div>
            <span className="text-xs md:text-sm lg:text-base">{name}</span>
        </>
    );
}

export default CourseStatistics;