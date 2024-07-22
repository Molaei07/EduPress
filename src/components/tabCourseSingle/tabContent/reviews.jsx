import { getLanguage, useTranslation } from "react-multi-lang";
import AnyUserComment from "../../commentForm/anyUserComments";
import { EnglishComments, PersianComments } from "../../../data/userComments/userComments";
import Rate from "../../statistics/rateOfSingleCourse";

const Reviews = () => {
    const translate = useTranslation()
    const language = getLanguage()
    return (
        <div className="w-full flex flex-wrap gap-y-2">
            <h1 className="capitalize w-full font-ExoSemiBold text-sm sm:text-xl dark:text-white">{translate("commentForm.titer")}</h1>
            <div className="w-full h-fit flex flex-wrap gap-y-4">
                <div className="w-full flex items-center gap-x-4">
                    <span className="h-fit font-ExoSemiBold text-3xl sm:text-4xl dark:text-white">4.0</span>
                    <div className="h-full w-44">
                        <div className="w-2/3 h-1/2">
                            <img src="../../../../public/images/Rate4.png" alt="Rate" />
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mt-1 text-xs sm:text-sm font-JostRegular">based on 146,951 ratings</p>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-wrap gap-y-1">
                    <Rate rate={"90"} star={5} />
                    <Rate rate={"5"} star={4} />
                    <Rate rate={"2"} star={3} />
                    <Rate rate={"2"} star={2} />
                    <Rate rate={"1"} star={1} />
                </div>
                <ul className="w-full h-fit flex flex-wrap">
                    {language === 'en' ? EnglishComments.map((element) => {
                        return (
                            <AnyUserComment key={element.id} name={element.userName} profile={element.userProfile} date={element.commentDate} comment={element.userComment} />
                        )
                    }) : PersianComments.map((element) => {
                        return(
                            <AnyUserComment key={element.id} name={element.userName} profile={element.userProfile} date={element.commentDate} comment={element.userComment} />
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Reviews;