import HamburgerComponent from "../../hamburgerMenu/hamburgerMenu";
import FilterItems from "../../hamburgerMenu/filterItems/filterItems";
import MediaQuery from "react-responsive";
import { useTranslation } from "react-multi-lang";

/* eslint-disable react/prop-types */
const AllCourseHeader = ({ setView, set, language }) => {
    const translate = useTranslation()

    // Change to view 2
    const changeToView2 = () => {
        setView('view2');
    }
    // Change to view 2
    const changeToView1 = () => {
        setView('view1');
    }

    return (
        <header className="w-full h-fit py-2 flex flex-wrap sm:flex-nowrap justify-between">
            <h1 className="w-full sm:w-auto font-ExoSemiBold text-2xl md:text-3xl text-black dark:text-white">{translate("allCoursesSubHeader.titer")}</h1>
            <div className="w-full sm:w-auto flex justify-between gap-x-2 h-full items-center">
                <input type="text" className={`w-[70%] bg-transparent sm:w-44 md:w-64 h-5 font-JostRegular text-sm md:text-base searchBg outline-none p-0 m-0 border-b-2 border-gray-400 ${language === false ? "bg-right" : "bg-left"}`} placeholder={translate("allCoursesSubHeader.search")} />
                <div className="w-auto h-5 flex items-center gap-x-2">
                    <button onClick={changeToView1} className="w-5 h-full bg-[url('../../../../public/images/view1.png')] bg-center bg-no-repeat bg-contain"></button>
                    <button onClick={changeToView2} className="w-5 h-full bg-[url('../../../../public/images/view2.png')] bg-center bg-no-repeat bg-contain"></button>
                    <MediaQuery maxWidth={1024}>
                        <HamburgerComponent items={<FilterItems set={set} language={language} />} />
                    </MediaQuery>
                </div>
            </div>
        </header>
    );
}

export default AllCourseHeader;