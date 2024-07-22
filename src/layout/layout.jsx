import Header from "./header/header";
import Footer from "./footer/footer";
import { Outlet } from "react-router-dom";
import DarkBtn from "./darkModeBtn/darkBtn";
import Translate from "../translate/translate.jsx";
import { setDefaultLanguage, setDefaultTranslations } from 'react-multi-lang'
import en from "../translate/en.json"
import fa from "../translate/fa.json"
import { useState } from "react";

setDefaultLanguage('en')
setDefaultTranslations({ en, fa })

const Layout = () => {

    const [lang, setLang] = useState(false)

    return (
        <>
            <Header />
            <main className="w-full mx-auto flex justify-center flex-wrap gap-y-10 lg:gap-y-20 dark:bg-[#2B2B2B] pb-10 lg:pb-20">
                <div className="w-12 lg:w-16 z-30 h-fit  rounded-full bg-slate-500 p-1 fixed left-2 sm:left-16 bottom-2 sm:bottom-16 flex flex-wrap">
                    <DarkBtn />
                    <Translate lang={lang} setLang={setLang} />
                </div>
                <Outlet context={lang} />
            </main>
            <Footer />
        </>
    );
}

export default Layout;