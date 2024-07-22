import { getLanguage, useTranslation } from "react-multi-lang";

export const FirstPoster = () => {
    const translate = useTranslation()

    const check = getLanguage()

    return (
        <div className={`w-full h-64 sm:h-80 md:h-[500px] lg:h-[600px] flex justify-center ${check !== "fa" ? "bg-[url('../../../../public/images/Image.png')]" : "bg-[url('../../../../public/images/ImageFa.png')]"} bg-cover bg-no-repeat bg-center`}>
            <div className="w-full h-full max-w-screen-2xl flex items-center px-4 sm:px-16 xl:px-48">
                <div className="w-64 md:w-80 lg:w-96 flex flex-wrap gap-y-4">
                    <h1 className="w-full font-ExoSemiBold text-2xl md:text-3xl lg:text-5xl">{translate("posters.firstPoster.name")}</h1>
                    <p className="w-full font-JostRegular text-xs md:text-sm text-gray-500">{translate("posters.firstPoster.description")}</p>
                    <button className="orangeButton">{translate("posters.firstPoster.button")}</button>
                </div>
            </div>
        </div>
    );
}