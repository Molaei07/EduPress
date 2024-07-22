/* eslint-disable react/prop-types */
import MediaQuery from "react-responsive";
import Carousel from "react-multi-carousel";
import FeedbacksResponsiveSlider from "../../../sliders/responsive/feedbacksResponsiveSlider/feedbacksResponsiveSlider";
import CreateItemFeedbacks from "./studentFeedbacksItems/feedbackItems";
import ButtonGroup from "../../../sliders/buttons/allSliderBtn";
import { useTranslation } from "react-multi-lang";

const StudentFeedbacks = ({ language }) => {
    const translate = useTranslation()

    return (
        <div className="w-full flex flex-wrap justify-center gap-y-10">
            <div className="w-full flex flex-wrap justify-center gap-y-1">
                <h1 className="w-full gridViewName text-center">{translate("gridViews.feedbacks.name")}</h1>
                <span className="gridViewDescription">{translate("gridViews.feedbacks.description")}</span>
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
                <Carousel
                    swipeable={false}
                    responsive={FeedbacksResponsiveSlider}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    keyBoardControl={true}
                    customTransition="all 0.5s"
                    transitionDuration={500}
                    containerClass="carousel-container left-0 sm:pb-10"
                    deviceType={"mobile"}
                    itemClass="sm:mx-2"
                    arrows={false}
                    customButtonGroup={<ButtonGroup language={language} />}
                    rtl={language === false ? false : true}
                >
                    <CreateItemFeedbacks />
                    <CreateItemFeedbacks />
                    <CreateItemFeedbacks />
                    <CreateItemFeedbacks />

                </Carousel>
            </MediaQuery>
        </div>
    );
}

export default StudentFeedbacks;