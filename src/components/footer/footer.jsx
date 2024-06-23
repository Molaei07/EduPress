import ApplicationName from "../applicationName/applicationName";
import FooterLinks from "./footerLinks";

const Footer = () => {

    return (
        <div className="w-full flex flex-wrap gap-y-5 lg:gap-y-0 justify-between bg-gray-100 px-4 sm:px-16 xl:px-48 pt-8 sm:pt-16 mt-20 pb-2 sm:pb-4">
            <div className="w-full lg:w-[40%] h-full flex flex-wrap gap-y-6">
                <ApplicationName />
                <p className="w-full lg:w-2/3 font-JostRegular text-xs sm:text-sm text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <FooterLinks partName={"GET HELP"} links={["Contact Us", "Latest Articles", "FAQ"]} socialMedias={[]} />
            <FooterLinks partName={"PROGRAMS"} links={["Art & Design", "Business", "IT & Software", "Languages", "Programming"]} socialMedias={[]} />
            <FooterLinks partName={"CONTACT US"} links={["Address: 2321 New Design Str, Lorem Ipsum10 Hudson Yards, USA", "Tel: + (123) 2500-567-8988", "Mail: supportlms@gmail.com"]}  socialMedias={["facebook", "pinterest", "twitter", "instagram", "youtube"]} />
            <div className="w-full border-t border-gray-200 border-solid pt-2 sm:pt-4 mt-4 sm:mt-16 text-center text-xs sm:text-sm text-gray-700 font-JostRegular">
                Copyright © 2024 LearnPress LMS | Powered by ThimPress
            </div>
        </div>
    );
}

export default Footer;