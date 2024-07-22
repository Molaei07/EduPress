/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"

const DarkBtn = () => {

    const [theme, setTheme] = useState("")

    useEffect(() => {
        let webTheme = localStorage.getItem('webTheme')
        setTheme(webTheme)
        if (webTheme === 'Dark') {
            document.documentElement.classList.add('dark', 'bg-darkGray')
        } else if (webTheme !== 'Light') {
            localStorage.setItem("webTheme", "Light")
        }

    }, [])

    const betChangeToDark = () => {
        document.documentElement.classList.add("dark")
        localStorage.setItem("webTheme", "Dark")
        setTheme("Dark")
    }
    const betChangeToLight = () => {
        document.documentElement.classList.remove("dark")
        localStorage.setItem("webTheme", "Light")
        setTheme("Light")
    }

    return (
        <>
            <input type="radio" name="theme" id="darkBtn" className="hidden peer/darkBtn" />
            <label htmlFor="darkBtn" className="w-10 h-10 lg:w-14 lg:h-14 text-center leading-[40px] lg:leading-[55px] text-white font-ExoSemiBold rounded-full peer-checked/darkBtn:rounded-b-none slowMotion hover:bg-neutral-800 bg-neutral-600 hover:cursor-pointer text-xs lg:text-base">{theme === "Dark" ? "Dark" : "Light"}</label>
            <div className="w-full h-0 font-ExoSemiBold overflow-hidden peer-checked/darkBtn:rounded-b-full peer-checked/darkBtn:h-20 lg:peer-checked/darkBtn:h-28 slowMotion text-white text-xs lg:text-base">
                <button onClick={betChangeToLight} className="w-10 h-10 lg:w-14 lg:h-14 bg-white text-black">Light</button>
                <button onClick={betChangeToDark} className="w-10 h-10 lg:w-14 lg:h-14 bg-neutral-900">Dark</button>
            </div>
        </>
    );
}

export default DarkBtn;