// import CreateItems from "./createItems";
import MediaQuery from "react-responsive";
import Carousel from "react-multi-carousel";
import ButtonGroup from "../../../allSliderBtn/allSliderBtn";
import CourseView2 from "../../../courseItems/view2/courseView2"
import CourseView1 from "../../../courseItems/view1/courseView1";
import Responsive from "../responsiveSlider/responsive";

export const FeaturedCourses = () => {
    return (
        <div className="w-full flex flex-wrap gap-y-8">
            <div className="w-full flex justify-between items-center">
                <div>
                    <h1 className="gridViewName">Featured courses</h1>
                    <span className="gridViewDescription">Explore our Popular Courses</span>
                </div>
                <button className="gridViewButton">All courses</button>
            </div>
            <MediaQuery minWidth={768}>
                <ul className="w-full flex justify-center flex-wrap gap-2 lg:gap-4">
                    <CourseView1 tag={'Photography'} onwerCourse={"Determined-Poitras"} name={"Create an LMS Website with LearnPress"} time={2} students={156} date={""} offPrice={"29.0"} originalPrice={0} picture={"Image1.png"} description={''} />
                    <CourseView1 tag={'Photography'} onwerCourse={"Determined-Poitras"} name={"Design a website with ThimPress"} time={2} students={156} date={""} offPrice={"59.0"} originalPrice={"49.0"} picture={"Rectangle131.png"} description={''} />
                    <CourseView1 tag={'Photography'} onwerCourse={"Determined-Poitras"} name={"Create an LMS Website with LearnPress"} time={2} students={156} date={""} offPrice={"29.0"} originalPrice={0} picture={"Image3.png"} description={''} />
                    <CourseView1 tag={'Photography'} onwerCourse={"Determined-Poitras"} name={"Create an LMS Website with LearnPress"} time={2} students={156} date={""} offPrice={"29.0"} originalPrice={0} picture={"Image(1).png"} description={''} />
                    <CourseView1 tag={'Photography'} onwerCourse={"Determined-Poitras"} name={"Create an LMS Website with LearnPress"} time={2} students={156} date={""} offPrice={"29.0"} originalPrice={0} picture={"Rectangle 139(1).png"} description={''} />
                    <CourseView1 tag={'Photography'} onwerCourse={"Determined-Poitras"} name={"Create an LMS Website with LearnPress"} time={2} students={156} date={""} offPrice={"29.0"} originalPrice={0} picture={"Image(2).png"} description={''} />
                </ul>
            </MediaQuery>
            <MediaQuery maxWidth={768}>
                <Carousel
                    swipeable={false}
                    responsive={Responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    keyBoardControl={true}
                    customTransition="all 0.5s"
                    transitionDuration={500}
                    containerClass="carousel-container left-0 sm:pb-10"
                    deviceType={"mobile"}
                    arrows={false}
                    customButtonGroup={<ButtonGroup />}
                >
                    <CourseView2 onwerCourse={"Determined-Poitras"} name={"Create an LMS Website with LearnPress"} time={2} students={156} offPrice={"29.0"} originalPrice={0} tag={"Photography"} picture={"Image1.png"} />
                    <CourseView2 onwerCourse={"Determined-Poitras"} name={"Design a website with ThimPress"} time={2} students={156} offPrice={"59.0"} originalPrice={"49.0"} tag={"Photography"} picture={"Rectangle131.png"} />
                    <CourseView2 onwerCourse={"Determined-Poitras"} name={"Create an LMS Website with LearnPress"} time={2} students={156} offPrice={"29.0"} originalPrice={0} tag={"Photography"} picture={"Image3.png"} />
                    <CourseView2 onwerCourse={"Determined-Poitras"} name={"Create an LMS Website with LearnPress"} time={2} students={156} offPrice={"29.0"} originalPrice={0} tag={"Photography"} picture={"Image(1).png"} />
                    <CourseView2 onwerCourse={"Determined-Poitras"} name={"Create an LMS Website with LearnPress"} time={2} students={156} offPrice={"29.0"} originalPrice={0} tag={"Photography"} picture={"Rectangle 139(1).png"} />
                    <CourseView2 onwerCourse={"Determined-Poitras"} name={"Create an LMS Website with LearnPress"} time={2} students={156} offPrice={"29.0"} originalPrice={0} tag={"Photography"} picture={"Image(2).png"} />
                </Carousel>
            </MediaQuery>
        </div>
    );
}