/* eslint-disable react/prop-types */
const FooterLinks = ({ partName, links, socialMedias }) => {
    return (
        <div className={`${socialMedias.length != 0 ? "w-[50%] lg:w-[25%]" : "w-[20%] lg:w-[10%]"} h-full flex flex-wrap font-JostRegular gap-y-1 sm:gap-y-3`}>
            <span className="font-ExoSemiBold text-sm sm:text-base w-full mb-1 sm:mb-2">{partName}</span>
            {links.map((items, index) => (<a key={index} className="w-full slowMotion text-xs sm:text-sm text-gray-700 hover:text-orange-500" href="#">{items}</a>))}
            <ul className={`${socialMedias.length != 0 ? 'flex' : 'hidden'} w-full items-center gap-x-4`}>
                {socialMedias.map((items, index) => (
                    <li className="w-3.5 h-3.5 sm:w-fit sm:h-fit" key={index}>
                        <img className="w-full h-full hover:cursor-pointer hover:fill-orange-500" src={"./images/" + items + ".svg"} alt="Logo" />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FooterLinks;