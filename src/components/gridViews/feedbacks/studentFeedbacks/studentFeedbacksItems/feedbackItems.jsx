import { useTranslation } from "react-multi-lang";

const CreateItemFeedbacks = () => {
    const translate = useTranslation()

    return (
        <div className="w-full lg:w-[22%] h-fit dark:border-gray-500 border-gray-300 border-solid border rounded-xl px-3 2xl:px-6 py-5 2xl:py-10 flex flex-wrap gap-y-2 2xl:gap-y-8">
            <div className="w-8 h-8">
                <img className="w-full h-full" src="./images/“.png" alt="Logo" />
            </div>
            <p className="font-JostRegular text-sm w-full dark:text-white">{translate("gridViews.feedbacks.feedbackText")}</p>
            <div className="w-full flex flex-wrap gap-y-2">
                <h3 className="w-full font-ExoSemiBold text-base dark:text-white">{translate("gridViews.feedbacks.userName")}</h3>
                <span className="w-full text-sm font-JostRegular text-slate-400">{translate("gridViews.feedbacks.side")}</span>
            </div>
        </div>
    );
}

export default CreateItemFeedbacks;