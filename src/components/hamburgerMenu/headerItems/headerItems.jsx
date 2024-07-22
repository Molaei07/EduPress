import { NavLink } from "react-router-dom";
import { filtersId } from "../../filterPanel/functionsFilter";
import { useTranslation } from "react-multi-lang";

const HeaderItems = () => {
    const translate = useTranslation()

    return (
        <ul className="w-full order-last lg:order-none lg:w-4/5 h-full flex flex-wrap lg:flex-nowrap justify-center items-center leading-8 font-ExoSemiBold text-xs">
            <NavLink onClick={filtersId.length = 0} className="Menuitems" to="/" style={({ isActive }) => ({ color: isActive ? "#FF782D" : "", backgroundColor: isActive ? "#F5F5F5" : "" })}>{translate("header.home")}</NavLink>
            <NavLink className="Menuitems" to="/courses" style={({ isActive }) => ({ color: isActive ? "#FF782D" : "", backgroundColor: isActive ? "#F5F5F5" : "" })}>{translate("header.courses")}</NavLink>
            <li className="Menuitems">{translate("header.blog")}</li>
            <li className="Menuitems">{translate("header.page")}</li>
            <li className="Menuitems">{translate("header.learnPress Add-On")}</li>
            <li className="Menuitems">{translate("header.Premium Theme")}</li>
        </ul>
    );
}

export default HeaderItems;