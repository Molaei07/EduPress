import ApplicationName from "../../components/applicationName/applicationName";
import searchLogo from "../../assets/images/Search.png"
import { useTranslation } from "react-multi-lang";
import MediaQuery from "react-responsive";
import HamburgerComponent from "../../components/hamburgerMenu/hamburgerMenu";
import HeaderItems from "../../components/hamburgerMenu/headerItems/headerItems";

const Header = () => {
    const translate = useTranslation()

    return (
        <header className="bg-white dark:bg-[#414141] w-full h-12 flex justify-center items-center px-4 sm:px-16 xl:px-48 shadow-md relative z-10">
            <div className="w-full max-w-screen-xl h-full flex flex-wrap lg:flex-nowrap justify-between items-center">
                <ApplicationName />
                <MediaQuery minWidth={1024}>
                    <HeaderItems />
                    <div className="w-44 h-full dark:text-white flex justify-end gap-x-2 items-center font-JostRegular font-bold text-sm">
                        <button>{translate("header.Login")}</button>
                        <span>/</span>
                        <button>{translate("header.register")}</button>
                        <button className="w-10 h-10">
                            <img className="w-full h-full" src={searchLogo} alt="Logo" />
                        </button>
                    </div>
                </MediaQuery>
                <MediaQuery maxWidth={1024}>
                    <HamburgerComponent items={<HeaderItems />} />
                </MediaQuery>
            </div>
        </header>
    );
}

export default Header;