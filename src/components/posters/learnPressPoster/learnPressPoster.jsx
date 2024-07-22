import { getLanguage, useTranslation } from "react-multi-lang";

const LearnPressPoster = () => {
    const translate = useTranslation()
    const check = getLanguage()

    return (
        <div className={`w-full sm:h-48 lg:h-72 flex items-center p-4 lg:p-10 rounded-2xl ${check === "en" ? "bg-[url('../../../../public/images/Mask.png')]" : "bg-[url('../../../../public/images/MaskFa.png')]"} bg-auto sm:bg-cover bg-no-repeat bg-left sm:bg-center`}>
            <div className="w-full sm:w-[40%] flex flex-wrap">
                <a className="w-full font-ExoSemiBold text-xs lg:text-sm text-gray-700 mb-1 lg:mb-2" href="#">{translate("posters.learnPressPoster.tag")}</a>
                <h1 className="w-full font-ExoSemiBold text-xl lg:text-3xl mb-2 lg:mb-4">{translate("posters.learnPressPoster.name")}</h1>
                <p className="w-full font-JostRegular text-xs lg:text-sm text-gray-700 mb-2 lg:mb-4">{translate("posters.learnPressPoster.description")}</p>
                <button className="orangeButton px-2 py-1 lg:py-2 text-sm lg:text-base lg:px-4">{translate("posters.learnPressPoster.button")}</button>
            </div>
        </div>
    );
}

export default LearnPressPoster;