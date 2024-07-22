import { useTranslation } from "react-multi-lang";

const CommentForm = () => {
    const translate = useTranslation()

    return (
        <div className="flex flex-wrap gap-y-4 w-full">
            <h1 className="w-full font-ExoSemiBold text-xl dark:text-white">{translate("commentForm.title")}</h1>
            <span className="w-full text-sm text-gray-600 dark:text-gray-200 mb-2">{translate("commentForm.description")}</span>
            <div className="w-full flex gap-x-4">
                <input className="filedComment" type="text" name="nickname" placeholder={translate("commentForm.nameInput")} />
                <input className="filedComment" type="email" name="email" placeholder={translate("commentForm.emailInput")} />
            </div>
            <textarea className="w-full min-h-16 max-h-28 filedComment" name="comment" placeholder={translate("commentForm.commentInput")} />
            <div className="w-full flex items-center text-xs gap-x-2">
                <input type="checkbox" name="saveName" id="checkSaveName" />
                <label className="text-gray-600 dark:text-gray-200" htmlFor="checkSaveName">{translate("commentForm.saveMe")}</label>
            </div>
            <button className="orangeButton">{translate("commentForm.button")}</button>
        </div>
    );
}

export default CommentForm;