import { useTranslation } from "react-multi-lang";

/* eslint-disable react/prop-types */
export const CreateItemInEachPart = ({ name, time, condition }) => {
    const translate = useTranslation()
    return (
        <div className="w-full h-fit flex justify-between group">
            <div className="flex gap-x-2 items-center">
                <div className="w-3 h-3.5">
                    <img className="w-full h-full" src="../../../../public/images/document.png" alt="Logo" />
                </div>
                <h1 className="font-ExoSemiBold text-xs md:text-base slowMotion dark:text-white group-hover:text-orange-500">{name}</h1>
            </div>
            <div className="flex gap-x-2 sm:gap-x-6 items-center">
                <button className="hover:cursor-pointer text-xs md:text-base px-2 py-1 rounded-md font-JostMedium bg-sky-600 text-white">{translate("singleCourseTabs.curriculum.button")}</button>
                <span className="text-xs md:text-base font-JostRegular dark:text-white">{time}</span>
                <div className="w-3 h-3">
                    {
                        condition === "lock" ? <img className="w-full h-full" src="../../../../public/images/lock.png" alt="Logo" /> : <img className="w-full h-full" src="../../../../public/images/check2.png" alt="Logo" />
                    }
                </div>
            </div>
        </div>
    );
}

export const CreateItemsEachPartOfFAQ = () => {
    const translate = useTranslation()

    return (
        <p className="text-xs sm:text-base dark:text-white font-JostRegular">
            {translate("singleCourseTabs.faqs.description")}
        </p>
    );
}

const CurriculumItem = ({ id, type, name, lessons, time }) => {
    const translate = useTranslation()

    return (
        <div className="w-full h-fit flex flex-wrap relative">
            <input className={`hidden peer/curriculum`} type="checkbox" name={type} id={id} />
            <div className={`w-2 h-1 md:w-3 md:h-2 bg-contain bg-center bg-no-repeat bg-arrowBottom peer-checked/curriculum:bg-arrowTop absolute ${type === "curriculum" ? "left-4" : "right-4"} top-5`}></div>
            <label className={`group hover:cursor-pointer w-full flex justify-between pr-1 sm:pr-8 pl-8 ${type === "curriculum" ? "py-3" : "py-3 sm:py-5"} rounded-md peer-checked/curriculum:rounded-b-none font-ExoSemiBold dark:bg-neutral-800 bg-white`} htmlFor={id}>
                <div className="flex gap-x-2 items-center">
                    <h1 className="group-hover:text-orange-500 text-sm md:text-base slowMotion dark:text-white">{name}</h1>
                </div>
                <div className={`${type === "curriculum" ? "flex" : "hidden"} gap-x-2 text-xs md:text-sm font-JostMedium dark:text-gray-300 text-gray-600`}>
                    <span>{lessons} {translate("singleCourseTabs.curriculum.lessons")}</span>
                    <span>{time} {translate("singleCourseTabs.curriculum.mins")}</span>
                </div>
            </label>
            <div className={`w-full flex flex-wrap gap-y-0 md:gap-y-6 pl-8 sm:pl-14 pr-10 peer-checked/curriculum:py-3 h-0 ${type === "curriculum" ? "peer-checked/curriculum:h-32 md:peer-checked/curriculum:h-44" : "peer-checked/curriculum:h-28"} rounded-b-md dark:bg-black bg-white overflow-hidden transition-all duration-500`}>
                {
                    type === "curriculum" ? (
                        <>
                            <CreateItemInEachPart name={translate("singleCourseTabs.curriculum.subName")} time={"12:30"} condition={"unlock"} />
                            <CreateItemInEachPart name={translate("singleCourseTabs.curriculum.subName")} time={"12:30"} condition={"unlock"} />
                            <CreateItemInEachPart name={translate("singleCourseTabs.curriculum.subName")} time={"12:30"} condition={"lock"} />
                        </>) : (
                        <CreateItemsEachPartOfFAQ />
                    )
                }
            </div>
        </div>
    );
}

export default CurriculumItem;