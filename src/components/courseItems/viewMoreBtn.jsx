/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-multi-lang"

const ViewMoreBtn = ({ id }) => {
    const translate = useTranslation()
    const navigate = useNavigate()

    function showInfo(courseId) {
        navigate(`/courses/${courseId}/overview`)
    }

    return (
        <button onClick={() => { showInfo(id) }} className="dark:text-white font-JostMedium text-xs lg:text-sm">{translate("courseItems.more")}</button>
    );
}

export default ViewMoreBtn;