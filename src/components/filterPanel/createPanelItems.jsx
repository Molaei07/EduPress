/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { useState } from "react"
import { handleFilter } from "./functionsFilter";

/* eslint-disable react/prop-types */
const CreatePanelItem = ({ filter, typeOf, typeName, itemsName, number, stars }) => {
   

    return (
        <>
            <h1 className="w-full font-ExoSemiBold text-lg mb-1">{typeName}</h1>
            <div className="w-full flex flex-wrap gap-x-2 gap-y-2 items-center font-JostRegular mb-4">
                {
                    itemsName ? itemsName.map((name, index) => {
                        return (
                            <div key={index} className="w-full flex justify-between">
                                <div className="w-full flex gap-x-2">
                                    <input  type="checkbox" onClick={()=>{handleFilter(name, filter)}} name={typeOf} id={name} className="hover:cursor-pointer" />
                                    <label htmlFor={name} className="text-gray-500 hover:cursor-pointer">{name}</label>
                                </div>
                                <span className="text-gray-500 font-JostRegular">{number}</span>
                            </div>
                        )
                    }) : null
                }
                {
                    stars ? stars.map((star, id) => {
                        return (
                            <div key={id} className="w-full flex justify-between">
                                <div className="w-full flex items-center gap-x-2 group">
                                    <input type="checkbox" name="category" id={star} className="group-hover:cursor-pointer" />
                                    <label htmlFor={star} className="text-gray-500 group-hover:cursor-pointer">
                                        <img src={"./images/Star" + star + ".png"} alt="Star" />
                                    </label>
                                </div>
                                <span className="text-gray-500 font-JostRegular">{number}</span>
                            </div>
                        )
                    }) : null
                }
            </div>
        </>
    );
}

export default CreatePanelItem;