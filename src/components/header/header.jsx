import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="w-full h-12 flex justify-center items-center px-4 sm:px-16 xl:px-48 shadow-md relative z-10">
            <div className="w-full max-w-screen-xl h-full flex flex-wrap lg:flex-nowrap justify-between items-center">
                <div className="w-40 h-1/2 flex items-center justify-between gap-x-1">
                    <img className="w-1/6 h-full" src="./images/Isolation_Mode.png" alt="Logo" />
                    <span className="w-5/6 h-full text-2xl leading-6 font-ExoSemiBold">EduPress</span>
                </div>
                <ul className="w-full order-last lg:order-none lg:w-4/5 h-full hidden lg:flex justify-center items-center leading-8 font-ExoSemiBold text-xs">
                    <NavLink className="Menuitems" to="/" style={{color: "#FF782D", backgroundColor: "#F5F5F5"}}>Home</NavLink>
                    <li className="Menuitems">Courses</li>
                    <li className="Menuitems">Blog</li>
                    <li className="Menuitems">Page</li>
                    <li className="Menuitems">LearnPress Add-On</li>
                    <li className="Menuitems">Premium Theme</li>
                </ul>
                <div className="w-40 h-full hidden lg:flex justify-end gap-x-2 items-center font-JostRegular font-bold text-sm">
                    <button>Login</button>
                    <span>/</span>
                    <button>Register</button>
                    <button className="w-10 h-10">
                        <img className="w-full h-full" src="./images/Search.png" alt="Logo" />
                    </button>
                </div>
                <div className="w-8 h-8 rounded-full flex lg:hidden justify-center items-center hover:cursor-pointer">
                    <img className="w-1/2 h-1/2" src="./images/mobileMenu.png" alt="Menu" />
                </div>
            </div>
        </header>
    );
}

export default Header;