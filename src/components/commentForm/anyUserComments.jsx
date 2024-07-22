/* eslint-disable react/prop-types */
import { useTranslation } from "react-multi-lang";

const AnyUserComment = ({name, profile, comment, date}) => {
    const translate = useTranslation()

    return (
        <li className="w-full h-fit flex gap-x-4 border-t border-gray-300 py-5">
            <div className="min-w-14 h-14 rounded-full">
                <img className="w-full h-full" src={`../../../../public/images/${profile}`} alt="Logo" />
            </div>
            <div className="w-full flex flex-wrap">
                <div className="w-full flex justify-between mb-1">
                    <h1 className="font-ExoSemiBold text-sm sm:text-base dark:text-white">{name}</h1>
                    <h1 className="font-JostRegular text-gray-600 dark:text-gray-300 text-sm sm:text-base">{date}</h1>
                </div>
                <p className="w-full flex items-center font-JostRegular text-sm sm:text-base text-gray-600 dark:text-gray-300">{comment}</p>
                <button className="font-JostRegular flex gap-x-1 items-center mt-1">
                    <div className="w-2.5 sm:w-3.5 h-3">
                        <img className="w-full h-full" src="../../../../public/images/arrow2d.png" alt="arrow" />
                    </div>
                    <span className="text-sm sm:text-base dark:text-white">{translate("commentForm.reply")}</span>
                </button>
            </div>
        </li>
    );
}

export default AnyUserComment;