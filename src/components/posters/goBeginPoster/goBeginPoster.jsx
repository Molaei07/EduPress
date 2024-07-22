import { useTranslation } from "react-multi-lang";

export const GoBeginPoster = () => {
    const translate = useTranslation()

    return (
        <div className="w-full h-auto lg:h-48 flex gap-y-4 flex-wrap justify-center md:justify-between p-7 sm:p-10 items-center rounded-2xl BeginBackground">
            <div className="flex items-center gap-x-4">
                <div className="w-16 h-16 lg:w-24 lg:h-24 flex justify-center items-center rounded-full bg-white overflow-hidden">
                    <img className="w-2/3 h-2/3" src="../../../../public/images/education.png" alt="Logo" />
                </div>
                <h3 className="font-ExoSemiBold text-base lg:text-xl">{translate("posters.goBeginPoster.name")}</h3>
            </div>
            <div className="flex items-center gap-x-2 lg:gap-x-4">
                <button className="orangeButton bg-transparent border-2 border-orange-500 text-orange-500">{translate("posters.goBeginPoster.buttons.button2")}</button>
                <button className="orangeButton">{translate("posters.goBeginPoster.buttons.button2")}</button>
            </div>
        </div>
    );
}