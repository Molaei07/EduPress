import { useTranslation } from "react-multi-lang";

/* eslint-disable react/prop-types */
export const SkillPosterItems = ({ name }) => {
    return (
        <li className="w-full h-fit flex items-center gap-x-2">
            <img className="w-3 h-3" src="./images/check.png" alt="Logo" />
            <span className="font-JostRegular sm:text-sm lg:text-base dark:text-white">{name}</span>
        </li>
    );
}

export const GrowSkillPoster = () => {
    const translate = useTranslation()

    return (
        <div className="w-full lg:h-96 flex justify-between items-center">
            <div className="hidden md:block w-[35%] lg:w-[45%] h-full">
                <img className="w-full h-full" src="./images/Vector(1).png" alt="" />
            </div>
            <div className="w-full md:w-[60%] dark:bg-neutral-700 bg-slate-200 p-4 md:p-0 rounded-xl md:rounded-none md:dark:bg-transparent md:bg-transparent lg:w-[45%] h-fit flex flex-wrap gap-y-2 lg:gap-y-4">
                <div className="w-full h-fit flex flex-wrap">
                    <h1 className="w-full font-ExoSemiBold text-xl sm:text-2xl lg:text-4xl dark:text-white">{translate("posters.growSkillPoster.name.line1")} </h1>
                    <h1 className="w-full font-ExoSemiBold text-xl sm:text-2xl lg:text-4xl dark:text-white">{translate("posters.growSkillPoster.name.line2")}</h1>
                </div>
                <p className="font-JostRegular text-xs sm:text-sm lg:text-base text-black dark:text-gray-300 md:text-gray-500">{translate("posters.growSkillPoster.description")}</p>
                <ul className="w-full flex flex-wrap gap-y-2">
                    <SkillPosterItems name={translate("posters.growSkillPoster.licenses")} />
                    <SkillPosterItems name={translate("posters.growSkillPoster.licenses")} />
                    <SkillPosterItems name={translate("posters.growSkillPoster.licenses")} />
                    <SkillPosterItems name={translate("posters.growSkillPoster.licenses")} />
                </ul>
                <button className="orangeButton px-2 lg:px-4 py-1 lg:py-2 text-sm lg:text-base">{translate("posters.growSkillPoster.button")}</button>
            </div>
        </div>
    );
}