import ApplicationName from "../../components/applicationName/applicationName";
import FooterLinks from "./footerLinks";
import facebook from "../../assets/images/facebook.svg";
import pinterest from "../../assets/images/pinterest.svg";
import twitter from "../../assets/images/twitter.svg";
import instagram from "../../assets/images/instagram.svg";
import youtube from "../../assets/images/youtube.svg";
import { useTranslation } from "react-multi-lang";

const Footer = () => {
    const translate = useTranslation()
    return (
        <div className="w-full flex flex-wrap gap-y-5 lg:gap-y-0 justify-between dark:bg-[#414141] bg-gray-100 px-4 sm:px-16 xl:px-48 pt-8 sm:pt-16 pb-2 sm:pb-4">
            <div className="w-full lg:w-[40%] h-full flex flex-wrap gap-y-6">
                <ApplicationName />
                <p className="w-full lg:w-2/3 font-JostRegular text-xs sm:text-sm dark:text-gray-300 text-gray-700">
                    {translate("footer.description")}
                </p>
            </div>
            <FooterLinks partName={translate("footer.part1.partName")} links={[translate("footer.part1.contactUs"), translate("footer.part1.latestArticles"), translate("footer.part1.faq")]} socialMedias={[]} />
            <FooterLinks partName={translate("footer.part2.partName")} links={[translate("footer.part2.art&Design"), translate("footer.part2.business"), translate("footer.part2.iT&Software"), translate("footer.part2.languages"), translate("footer.part2.programming")]} socialMedias={[]} />
            <FooterLinks partName={translate("footer.part3.partName")} links={[translate("footer.part3.address"), translate("footer.part3.tel"), translate("footer.part3.mail")]}  socialMedias={[facebook, pinterest, twitter, instagram, youtube]} />
            <div className="w-full border-t dark:text-gray-300 border-gray-200 border-solid pt-2 sm:pt-4 mt-4 sm:mt-16 text-center text-xs sm:text-sm text-gray-700 font-JostRegular">
                {translate("footer.span")}
            </div>
        </div>
    );
}

export default Footer;