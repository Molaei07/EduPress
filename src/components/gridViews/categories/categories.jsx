/* eslint-disable no-unused-vars */
import { useTranslation } from "react-multi-lang";
import { useSearchParams } from "react-router-dom";
import CopyButton from "../../copyPart/copyButton";
import { getClientY } from "../../copyPart/copy";

/* eslint-disable react/prop-types */
export const CreateCategories = ({ picture, name, courseNumber }) => {
    const translate = useTranslation()

    return (
        <li className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-2xl hoverItems flex items-center border border-solid border-gray-200 slowMotion group">
            <div className="w-full max-h-fit flex flex-wrap justify-center items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex justify-center items-center overflow-hidden">
                    <img className="w-8/12 h-8/12" src={"./images/" + picture} alt="Logo" />
                </div>
                <h3 className="w-full dark:text-white text-center text-sm sm:text-base font-ExoSemiBold mt-4 slowMotion group-hover:text-orange-400">{name}</h3>
                <span className="w-full text-center text-sm font-JostRegular text-gray-400">{courseNumber} {translate("gridViews.topCategories.courses")}</span>
            </div>
        </li>
    );
}

export const TopCategories = () => {
    const translate = useTranslation()

    const [searchParams, setSearchParams] = useSearchParams({ clientY: 0 })

    return (
        <div className="w-full flex flex-wrap gap-y-8">
            <div className="w-full flex justify-between items-center">
                <div>
                    <div className="flex gap-x-2">
                        <CopyButton getFunction={getClientY} set={setSearchParams} />
                        <h1 className="gridViewName">{translate("gridViews.topCategories.title")}</h1>
                    </div>
                    <span className="gridViewDescription">{translate("gridViews.topCategories.description")}</span>
                </div>
                <button className="gridViewButton">{translate("gridViews.topCategories.button")}</button>
            </div>
            <ul className="w-full flex flex-wrap justify-center gap-4 lg:gap-9">
                <CreateCategories picture={"Icon.png"} name={translate("gridViews.topCategories.categories.Art & Design")} courseNumber={38} />
                <CreateCategories picture={"Component 2.png"} name={translate("gridViews.topCategories.categories.Development")} courseNumber={38} />
                <CreateCategories picture={"Group.png"} name={translate("gridViews.topCategories.categories.Communiication")} courseNumber={38} />
                <CreateCategories picture={"Group(1).png"} name={translate("gridViews.topCategories.categories.Videography")} courseNumber={38} />
                <CreateCategories picture={"Group(2).png"} name={translate("gridViews.topCategories.categories.Photography")} courseNumber={38} />
                <CreateCategories picture={"Group(3).png"} name={translate("gridViews.topCategories.categories.Marketing")} courseNumber={38} />
                <CreateCategories picture={"Group(4).png"} name={translate("gridViews.topCategories.categories.Content writing")} courseNumber={38} />
                <CreateCategories picture={"Group(5).png"} name={translate("gridViews.topCategories.categories.Finance")} courseNumber={38} />
                <CreateCategories picture={"Group(6).png"} name={translate("gridViews.topCategories.categories.Science")} courseNumber={38} />
                <CreateCategories picture={"Icon.png"} name={translate("gridViews.topCategories.categories.Network")} courseNumber={38} />
            </ul>
        </div>
    );
}