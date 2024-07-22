/* eslint-disable react/prop-types */
import { useState } from "react"
import { getLanguage } from "react-multi-lang";
import HamburgerMenu from "react-hamburger-menu";

export const Hamburger = ({ bet, changeBet }) => {
    return (
        <HamburgerMenu
            isOpen={bet}
            menuClicked={changeBet}
            width={15}
            height={12}
            strokeWidth={1}
            rotate={0}
            color='black'
            borderRadius={0}
            animationDuration={0.5}
        />
    );
}

const HamburgerComponent = ({ items }) => {
    const [history, setHistory] = useState(false)
    const language = getLanguage()

    const changeHistory = () => {
        setHistory(!history)
    }

    return (
        <>
            <div className={`hover:cursor-pointer ${history === true ? "hidden" : ""}`}>
                <Hamburger bet={history} changeBet={changeHistory} />
            </div>
            <div onClick={() => { setHistory(false) }} className={`${history === true ? "block" : "hidden"} z-10 w-svw h-svh fixed top-0 left-0 bg-transparent`}></div>
            <div className={`overflow-hidden flex justify-end flex-wrap py-2 px-4 w-60 h-svh fixed ${language === "en" ? (history === false ? "-right-60" : "right-0") : (history === false ? "-left-60" : "left-0")} top-0 bg-red z-40 bg-neutral-400/90 slowMotion`}>
                <div className="w-full h-fit flex flex-wrap justify-end gap-y-10">
                    <Hamburger bet={history} changeBet={changeHistory} />
                    <ul className="w-full h-fit flex flex-wrap justify-center -mt-8 leading-8 font-ExoSemiBold text-xs">
                        {items}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default HamburgerComponent;