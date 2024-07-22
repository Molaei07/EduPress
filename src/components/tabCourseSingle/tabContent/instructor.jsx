import { useOutletContext } from "react-router-dom";
import CourseStatistics from "../../courseItems/courseStatistics/courseStatistics";
import FooterLinks from "../../../layout/footer/footerLinks"
import facebook from "../../../assets/images/facebook.svg";
import pinterest from "../../../assets/images/pinterest.svg";
import twitter from "../../../assets/images/twitter.svg";
import instagram from "../../../assets/images/instagram.svg";
import youtube from "../../../assets/images/youtube.svg";
import { useTranslation } from "react-multi-lang";

const Instructor = () => {

    const electiveCourse = useOutletContext()
    const translate = useTranslation()
    return (
        <div className="w-full flex flex-wrap gap-y-4">
            <div className="w-full flex flex-wrap justify-center min-[450px]:justify-start min-[450px]:flex-nowrap gap-x-4">
                <div className="w-40 h-40 min-[450px]:w-40 min-[450px]:min-w-40 min-[450px]:h-40 rounded-2xl">
                    <img className="w-full h-full" src="../../../../public/images/Frame3871.png" alt="Logo" />
                </div>
                <div className="h-fit flex flex-wrap gap-y-2">
                    <h1 className="w-full font-ExoSemiBold text-base md:text-xl dark:text-white">{translate("singleCourseTabs.instructor.title")}</h1>
                    <p className="font-JostRegular text-gray-600 text-sm md:text-base dark:text-gray-300">{translate("singleCourseTabs.instructor.paragraph1")}</p>
                    <ul className="w-full h-fit gap-y-1">
                        <CourseStatistics info={electiveCourse.students} picture={"Vector.png"} name={`${electiveCourse.students} ${translate("singleCourseTabs.instructor.student")}`} />
                        <CourseStatistics info={electiveCourse.lessons} picture={'lessons.png'} name={`${electiveCourse.lessons} ${translate("singleCourseTabs.instructor.lesson")}`} />
                    </ul>
                </div>
            </div>
            <p className="w-full font-JostRegular text-gray-600 dark:text-gray-300 text-sm md:text-base">
            {translate("singleCourseTabs.instructor.paragraph2")}
            </p>
            <div className="w-full flex gap-x-2">
                <span className="font-JostRegular text-gray-600 dark:text-gray-300">{translate("singleCourseTabs.instructor.follow")}</span>
                <FooterLinks partName={""} links={[]} socialMedias={[facebook, pinterest, twitter, instagram, youtube]} />
            </div>
        </div>
    );
}

export default Instructor;