import MediaQuery from "react-responsive";
import CourseView1 from "../../../courseItems/view1/courseView1";
import Carousel from "react-multi-carousel";
import ButtonGroup from "../../../allSliderBtn/allSliderBtn";
import CourseView2 from "../../../courseItems/view2/courseView2";
import Responsive from "../responsiveSlider/responsive";

export const LatestArticles = () => {
    return (
        <div className="w-full flex flex-wrap gap-y-8">
            <div className="w-full flex items-center justify-between">
                <div>
                    <h1 className="gridViewName">Latest articles</h1>
                    <span className="gridViewDescription">Explore our Free Acticles</span>
                </div>
                <button className="gridViewButton">All articles</button>
            </div>
            <MediaQuery minWidth={768}>
                <ul className="w-full flex flex-wrap justify-center gap-2 lg:gap-4">
                    <CourseView1 tag={''} onwerCourse={''} name={"Best LearnPress WordPress Theme Collection for 2023"} time={''} students={''} date={"Jan 24, 22023"} offPrice={''} originalPrice={''} picture={"Rectangle132.png"} description={'Looking for an amazing & well-functional LearnPress WordPress Theme?...'} />
                    <CourseView1 tag={''} onwerCourse={''} name={"Best LearnPress WordPress Theme Collection for 2023"} time={''} students={''} date={"Jan 24, 22023"} offPrice={''} originalPrice={''} picture={"Rectangle139.png"} description={'Looking for an amazing & well-functional LearnPress WordPress Theme?...'} />
                    <CourseView1 tag={''} onwerCourse={''} name={"Best LearnPress WordPress Theme Collection for 2023"} time={''} students={''} date={"Jan 24, 22023"} offPrice={''} originalPrice={''} picture={"Rectangle129.png"} description={'Looking for an amazing & well-functional LearnPress WordPress Theme?...'} />
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
                    <CourseView2 tag={''} onwerCourse={''} name={"Best LearnPress WordPress Theme Collection for 2023"} time={''} students={''} date={"Jan 24, 22023"} offPrice={''} originalPrice={''} picture={"Rectangle132.png"} description={'Looking for an amazing & well-functional LearnPress WordPress Theme?...'} />
                    <CourseView2 tag={''} onwerCourse={''} name={"Best LearnPress WordPress Theme Collection for 2023"} time={''} students={''} date={"Jan 24, 22023"} offPrice={''} originalPrice={''} picture={"Rectangle139.png"} description={'Looking for an amazing & well-functional LearnPress WordPress Theme?...'} />
                    <CourseView2 tag={''} onwerCourse={''} name={"Best LearnPress WordPress Theme Collection for 2023"} time={''} students={''} date={"Jan 24, 22023"} offPrice={''} originalPrice={''} picture={"Rectangle129.png"} description={'Looking for an amazing & well-functional LearnPress WordPress Theme?...'} />
                </Carousel>
            </MediaQuery>
        </div>
    );
}