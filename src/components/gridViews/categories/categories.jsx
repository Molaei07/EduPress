/* eslint-disable react/prop-types */
export const CreateCategories = ({picture, name, courseNumber}) => {
    return (
        <li className="w-24 h-24 lg:w-48 lg:h-48 bg-white  rounded-2xl hoverItems flex items-center border border-solid border-gray-200 slowMotion group">
            <div className="w-full max-h-fit flex flex-wrap justify-center items-center">
                <div className="w-8 h-8 lg:w-12 lg:h-12 rounded-full flex justify-center items-center overflow-hidden">
                    <img className="w-8/12 h-8/12" src={"./images/" + picture} alt="Logo" />
                </div>
                <h3 className="w-full text-xs lg:text-base text-center font-ExoSemiBold mt-4 slowMotion group-hover:text-orange-400">{name}</h3>
                <span className="w-full text-center text-xs font-JostRegular text-gray-400">{courseNumber} Courses</span>
            </div>
        </li>
    );
}

export const TopCategories = () => {
    return (
        <div className="w-full flex flex-wrap gap-y-8">
            <div className="w-full flex justify-between items-center">
                <div>
                    <h1 className="gridViewName">Top Categories</h1>
                    <span className="gridViewDescription">Explore our Popular Categories</span>
                </div>
                <button className="gridViewButton">All categories</button>
            </div>
            <ul className="w-full flex flex-wrap justify-evenly sm:justify-center gap-2 md:gap-4 lg:gap-9">
                <CreateCategories picture={"Icon.png"} name={"Art & Design"} courseNumber={38} />
                <CreateCategories picture={"Component 2.png"} name={"Development"} courseNumber={38} />
                <CreateCategories picture={"Group.png"} name={"Communiication"} courseNumber={38} />
                <CreateCategories picture={"Group(1).png"} name={"Videography"} courseNumber={38} />
                <CreateCategories picture={"Group(2).png"} name={"Photography"} courseNumber={38} />
                <CreateCategories picture={"Group(3).png"} name={"Marketing"} courseNumber={38} />
                <CreateCategories picture={"Group(4).png"} name={"Content writing"} courseNumber={38} />
                <CreateCategories picture={"Group(5).png"} name={"Finance"} courseNumber={38} />
                <CreateCategories picture={"Group(6).png"} name={"Science"} courseNumber={38} />
                <CreateCategories picture={"Icon.png"} name={"Network"} courseNumber={38} />
            </ul>
        </div>
    );
}