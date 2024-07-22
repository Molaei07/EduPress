/* eslint-disable react/prop-types */
import { changeToENG } from "./translate";
import { changeToFA } from "./translate";

const Translate = ({ lang, setLang }) => {
    let url = location.href

    return (
        <div className={`${url === "http://localhost:5173/" ? "block" : "hidden"} w-auto h-auto`}>
            <input type="radio" name="theme" id="Language" className="hidden peer/language" />
            <label htmlFor="Language" className="mt-2 w-10 h-10 lg:w-14 lg:h-14 block text-center leading-[40px] lg:leading-[55px] text-white font-ExoSemiBold rounded-full peer-checked/language:rounded-b-none slowMotion hover:bg-neutral-800 bg-neutral-600 hover:cursor-pointer text-xs lg:text-base">{lang === false ? "ENG" : "FA"}</label>
            <div className="w-full h-0 overflow-hidden peer-checked/language:rounded-b-full peer-checked/language:h-20 lg:peer-checked/language:h-28 slowMotion font-ExoSemiBold text-white text-xs lg:text-base">
                <button onClick={() => {changeToFA(), setLang(true)}} className="w-10 h-10 lg:w-14 lg:h-14 bg-white text-black">FA</button>
                <button onClick={() => {changeToENG(), setLang(false)}} className="w-10 h-10 lg:w-14 lg:h-14 bg-neutral-900">ENG</button>
            </div>
        </div>
    );
}

export default Translate;