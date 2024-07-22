import { getLanguage, useTranslation } from "react-multi-lang";

/* eslint-disable react/prop-types */
export const CreateItems = ({ statistics, name }) => {
    const check = getLanguage()
    return (
        <li className="w-[49%] sm:w-1/4 p-4 sm:p-0 sm:h-full flex justify-center items-center flex-wrap dark:bg-neutral-700 bg-slate-200 rounded-2xl">
            <div className="flex flex-wrap justify-center sm:gap-y-2">
                <div className="w-full text-center font-ExoSemiBold text-xl sm:text-2xl lg:text-4xl text-orange-500">{statistics}</div>
                <span className={`font-JostMedium text-sm ${check === "fa" ? "md:text-xl" : "md:text-base"} dark:text-white`}>{name}</span>
            </div>
        </li>
    );
}

export const Statistics = () => {
    const translate = useTranslation()

    return (
        <ul className="w-full h-auto sm:h-28 lg:h-44 flex flex-wrap sm:flex-nowrap justify-between sm:justify-center gap-y-2 sm:gap-x-3 md:gap-x-6">
            <CreateItems statistics={"25K+"} name={translate("statistics.s1")} />
            <CreateItems statistics={"899"} name={translate("statistics.s2")} />
            <CreateItems statistics={"158"} name={translate("statistics.s3")} />
            <CreateItems statistics={"100%"} name={translate("statistics.s4")} />
        </ul>
    );
}