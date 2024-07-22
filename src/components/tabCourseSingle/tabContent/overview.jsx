import { useTranslation } from "react-multi-lang";

const Overview = () => {
    const translate = useTranslation()

    return (
        <>
            <p className="font-JostRegular text-gray-600 dark:text-white text-xs sm:text-base">
                {translate("singleCourseTabs.overview.paragraph1")}
            </p>
            <p className="font-JostRegular mt-4 sm:mt-8 text-gray-600 dark:text-white text-xs sm:text-base">
                {translate("singleCourseTabs.overview.paragraph2")}
            </p>
            <p className="font-JostRegular text-gray-600 dark:text-white text-xs sm:text-base">
                {translate("singleCourseTabs.overview.paragraph3")}
            </p>
        </>
    );
}

export default Overview;