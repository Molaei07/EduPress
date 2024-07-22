import { useTranslation } from "react-multi-lang";
import CurriculumItem from "./createItems/createCurriculumItems";

const Curriculum = () => {
    const translate = useTranslation()

    return (
        <div className="w-full h-fit flex flex-wrap gap-y-4">
            <span className="w-full font-JostRegular text-gray-600 dark:text-white text-sm sm:text-base sm:mb-4">{translate("singleCourseTabs.curriculum.description")}</span>
            <CurriculumItem id={"curriculum1"} type={"curriculum"} name={translate("singleCourseTabs.curriculum.title")} lessons={5} time={50} />
            <CurriculumItem id={"curriculum2"} type={"curriculum"} name={translate("singleCourseTabs.curriculum.title")} lessons={8} time={45} />
            <CurriculumItem id={"curriculum3"} type={"curriculum"} name={translate("singleCourseTabs.curriculum.title")} lessons={6} time={20} />
            <CurriculumItem id={"curriculum4"} type={"curriculum"} name={translate("singleCourseTabs.curriculum.title")} lessons={1} time={30} />
            <CurriculumItem id={"curriculum5"} type={"curriculum"} name={translate("singleCourseTabs.curriculum.title")} lessons={10} time={100} />
        </div>
    );
}

export default Curriculum;