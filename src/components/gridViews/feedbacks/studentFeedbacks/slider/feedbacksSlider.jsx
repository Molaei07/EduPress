/* eslint-disable react/prop-types */
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CreateItemFeedbacks from "../studentFeedbacksItems/feedbackItems"; 
import ButtonGroup from "../../../../allSliderBtn/allSliderBtn";

export const FeedbacksSlider = () => {

    const responsive = {
        tablet: {
            breakpoint: { max: 1024, min: 640 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 640, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <Carousel
            swipeable={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            keyBoardControl={true}
            customTransition="all 0.5s"
            transitionDuration={500}
            containerClass="carousel-container left-0 sm:pb-10"
            deviceType={"mobile"}
            itemClass="sm:mx-2"
            arrows={false}
            customButtonGroup={<ButtonGroup />}
        >
            <CreateItemFeedbacks />
            <CreateItemFeedbacks />
            <CreateItemFeedbacks />
            <CreateItemFeedbacks />

        </Carousel>
    );
}