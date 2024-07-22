import AppLogo from '../../assets/images/Isolation_Mode.png'
import { useTranslation } from 'react-multi-lang';

const ApplicationName = () => {
    const translate = useTranslation()

    return (
        <div className="w-40 h-1/2 flex items-center justify-between gap-x-1">
            <img className="w-1/6 h-full" src={AppLogo} alt="Logo" />
            <span className="w-5/6 h-full text-2xl leading-6 font-ExoSemiBold dark:text-white">{translate("applicationName")}</span>
        </div>
    );
}

export default ApplicationName;