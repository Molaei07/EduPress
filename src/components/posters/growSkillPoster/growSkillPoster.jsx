/* eslint-disable react/prop-types */
export const SkillPosterItems = ({ name }) => {
    return (
        <li className="w-full h-fit flex items-center gap-x-2">
            <img className="w-3 h-3" src="./images/check.png" alt="Logo" />
            <span className="font-JostRegular sm:text-sm lg:text-base">{name}</span>
        </li>
    );
}

export const GrowSkillPoster = () => {
    return (
        <div className="w-full lg:h-96 flex justify-between items-center">
            <div className="hidden md:block w-[35%] lg:w-[45%] h-full">
                <img className="w-full h-full" src="./images/Vector(1).png" alt="" />
            </div>
            <div className="w-full md:w-[60%] bg-slate-200 p-4 md:p-0 rounded-xl md:rounded-none md:bg-transparent lg:w-[45%] h-fit flex flex-wrap gap-y-2 lg:gap-y-4">
                <div className="w-full h-fit flex flex-wrap">
                    <h1 className="w-full font-ExoSemiBold text-xl sm:text-2xl lg:text-4xl">Grow Us Your Skill </h1>
                    <h1 className="w-full font-ExoSemiBold text-xl sm:text-2xl lg:text-4xl">With LearnPress LMS</h1>
                </div>
                <p className="font-JostRegular text-xs sm:text-sm lg:text-base text-black md:text-gray-500">We denounce with righteous indignation and dislike men who are so beguiled and demoralized that cannot trouble.</p>
                <ul className="w-full flex flex-wrap gap-y-2">
                    <SkillPosterItems name={"Certification"} />
                    <SkillPosterItems name={"Certification"} />
                    <SkillPosterItems name={"Certification"} />
                    <SkillPosterItems name={"Certification"} />
                </ul>
                <button className="orangeButton px-2 lg:px-4 py-1 lg:py-2 text-sm lg:text-base">Explorer course</button>
            </div>
        </div>
    );
}