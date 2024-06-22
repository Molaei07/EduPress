/* eslint-disable react/prop-types */
import MediaQuery from "react-responsive";
import { FeedbacksSlider } from "./slider/feedbacksSlider";
import CreateItemFeedbacks from "./studentFeedbacksItems/feedbackItems";

const StudentFeedbacks = () => {
    return (
        <div className="w-full flex flex-wrap justify-center gap-y-10">
            <div className="w-full flex flex-wrap justify-center gap-y-1">
                <h1 className="w-full gridViewName text-center">Student feedbacks</h1>
                <span className="gridViewDescription">What Students Say About Academy LMS</span>
            </div>
            <MediaQuery minWidth={1024}>
                <ul className="w-full flex justify-center gap-2 lg:gap-6 2xl:gap-8">
                    <CreateItemFeedbacks />
                    <CreateItemFeedbacks />
                    <CreateItemFeedbacks />
                    <CreateItemFeedbacks />
                </ul>
            </MediaQuery>
            <MediaQuery maxWidth={1024}>
                <FeedbacksSlider />
            </MediaQuery>
        </div>
    );
}

export default StudentFeedbacks;