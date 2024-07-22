/* eslint-disable react/prop-types */
import { useTranslation } from "react-multi-lang";
import { NavLink } from "react-router-dom";

export const TabItems = ({ address, name }) => {
    return (
        <NavLink to={address} style={({isActive}) => {return {color: isActive ? '#FF782D' : '', backgroundColor: isActive ? "#EAEAEA" : ""}}} className="text-xs sm:text-base w-1/5 text-center py-2 sm:py-4 font-ExoSemiBold hover:cursor-pointer">{name}</NavLink>
    );
}

const HeaderTab = () => {
    const translate = useTranslation()

    return (
        <div className="w-full flex border dark:border-neutral-700 border-gray-300 dark:bg-neutral-900 dark:text-white rounded-t-2xl overflow-hidden">
            <TabItems address={"overview"} name={translate("singleCourseTabs.header.overview")} />
            <TabItems address={"curriculum"} name={translate("singleCourseTabs.header.curriculum")} />
            <TabItems address={"instructor"} name={translate("singleCourseTabs.header.instructor")} />
            <TabItems address={"faqs"} name={translate("singleCourseTabs.header.faqs")} />
            <TabItems address={"reviews"} name={translate("singleCourseTabs.header.reviews")} />
        </div>
    );
}
 
export default HeaderTab;