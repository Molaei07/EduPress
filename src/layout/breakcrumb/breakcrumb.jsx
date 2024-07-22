/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { addCrumb, CrumbList, removeCrumb } from "./crumbFunctions";

const Breakcrumb = ({ crumb, crumbName }) => {
    addCrumb(crumb, crumbName)

    return (
        <>
            <div className="w-full text-lg flex gap-x-4 py-2.5 bg-gray-100 dark:bg-neutral-600 paddingLayout">
                {
                    CrumbList.map(crumb => {return (
                        <>
                            <NavLink onClick={() => {removeCrumb(crumb.id)}} key={crumb.id} end to={crumb.path} style={({ isActive }) => { return ({ color: isActive === true ? "grey" : "black" }) }}>{crumb.name}</NavLink>
                            <span>/</span>
                        </>
                    )}) 
                }
            </div>
        </>
    );
}

export default Breakcrumb;