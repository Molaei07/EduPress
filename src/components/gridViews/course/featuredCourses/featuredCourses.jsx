/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import MediaQuery from "react-responsive";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ButtonGroup from "../../../sliders/buttons/allSliderBtn";
import CoursesResponsiveSlider from "../../../sliders/responsive/courses/coursesResponsiveSlider";
import { ItemsView1 } from "../../../courseItems/createItem";
import { useEffect, useState } from "react";
import { Courses, CoursesFa } from "../../../../data/courses/courses.js";
import CourseView2 from "../../../courseItems/view2/courseView2";
import { useTranslation } from "react-multi-lang";
import { useSearchParams } from "react-router-dom";
import CopyButton from "../../../copyPart/copyButton.jsx";
import { getClientY } from "../../../copyPart/copy.js";

export const FeaturedCourses = ({ language }) => {
    // lang === false => language is english => Courses
    // lang === true => language is persian => CoursesFa
    const [lang, setLang] = useState(false)
    // change lang
    useEffect(() => {
        setLang(language)
    }, [language])

    const translate = useTranslation()

    const [searchParams, setSearchParams] = useSearchParams({clientY: 0})

    return (
        <div className="w-full flex flex-wrap gap-y-8">
            <div className="w-full flex justify-between items-center">
                <div>
                    <div className="flex gap-x-2">
                        <CopyButton getFunction={getClientY} set={setSearchParams} />
                        <h1 className="gridViewName">{translate("courseItems.title")}</h1>
                    </div>
                    <span className="gridViewDescription">{translate("courseItems.description")}</span>
                </div>
                <button className="gridViewButton" onClick={() => { setLang(!lang) }}>{translate("courseItems.button")}</button>
            </div>
            <MediaQuery minWidth={768}>
                <ul className={`w-full flex justify-center flex-wrap gap-2 lg:gap-4`}>
                    {
                        lang === false ? <ItemsView1 data={Courses} language={lang} /> : <ItemsView1 data={CoursesFa} language={lang} />
                    }
                </ul>
            </MediaQuery>
            <MediaQuery maxWidth={768}>
                <Carousel
                    swipeable={false}
                    responsive={CoursesResponsiveSlider}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    keyBoardControl={true}
                    customTransition="all 0.5s"
                    transitionDuration={500}
                    containerClass="carousel-container left-0 sm:pb-10"
                    deviceType={"mobile"}
                    arrows={false}
                    customButtonGroup={<ButtonGroup language={lang} />}
                    itemClass={lang === false ? "" : "dirRTL"}
                    rtl={lang === false ? false : true}
                >
                    {
                        lang === false ? Courses.map((item) => {
                            return (<CourseView2 key={item.id} language={lang} id={item.id} onwerCourse={item.owner} name={item.name} time={item.time} students={item.students} offPrice={item.offPrice} originalPrice={item.originalPrice} tag={item.tag} picture={item.picture} />)
                        }) : CoursesFa.map((item) => {
                            return (<CourseView2 key={item.id} language={lang} id={item.id} onwerCourse={item.owner} name={item.name} time={item.time} students={item.students} offPrice={item.offPrice} originalPrice={item.originalPrice} tag={item.tag} picture={item.picture} />)
                        })
                    }
                </Carousel>
            </MediaQuery>
        </div>
    );
}