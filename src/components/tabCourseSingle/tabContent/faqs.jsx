import { useTranslation } from "react-multi-lang";
import CurriculumItem from "./createItems/createCurriculumItems";

const Faq = () => {
    const translate = useTranslation()

    return (
        <div className="w-full h-fit flex flex-wrap gap-y-2 sm:gap-y-4">
            <CurriculumItem id={"curriculum1"} name={translate("singleCourseTabs.faqs.title")} lessons={""} time={""} />
            <CurriculumItem id={"curriculum2"} name={translate("singleCourseTabs.faqs.title")} lessons={""} time={""} />
            <CurriculumItem id={"curriculum3"} name={translate("singleCourseTabs.faqs.title")} lessons={""} time={""} />
            <CurriculumItem id={"curriculum4"} name={translate("singleCourseTabs.faqs.title")} lessons={""} time={""} />
        </div>
    );
}
 
export default Faq;