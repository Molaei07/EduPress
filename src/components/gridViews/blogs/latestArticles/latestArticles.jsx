/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import MediaQuery from "react-responsive";
import Carousel from "react-multi-carousel";
import ButtonGroup from "../../../sliders/buttons/allSliderBtn";
import CoursesResponsiveSlider from "../../../sliders/responsive/courses/coursesResponsiveSlider";
import "react-multi-carousel/lib/styles.css";
import { useTranslation } from "react-multi-lang";
import { useEffect, useState } from "react";
import { EnglishBlogs } from "../../../../data/blogs/englishBlogs";
import { PersianBlogs } from "../../../../data/blogs/persianBlogs";
import { createBlogsView1, createBlogsView2 } from "../../../../data/blogs/createBlogs";
import { useSearchParams } from "react-router-dom";
import CopyButton from "../../../copyPart/copyButton";
import { getClientY } from "../../../copyPart/copy";

export const LatestArticles = ({ language }) => {
    const translate = useTranslation()

    // lang === false => language is english => Courses
    // lang === true => language is persian => CoursesFa
    const [lang, setLang] = useState(false)
    // change lang
    useEffect(() => {
        setLang(language)
    }, [language])

    const [searchParams, setSearchParams] = useSearchParams({ clientY: 0 })

    return (
        <div className="w-full flex flex-wrap gap-y-8">
            <div className="w-full flex items-center justify-between">
                <div>
                    <div className="flex gap-x-2">
                        <CopyButton getFunction={getClientY} set={setSearchParams} />
                        <h1 className="gridViewName">{translate("gridViews.blogs.name")}</h1>
                    </div>
                    <span className="gridViewDescription">{translate("gridViews.blogs.description")}</span>
                </div>
                <button className="gridViewButton">{translate("gridViews.blogs.button")}</button>
            </div>
            <MediaQuery minWidth={768}>
                <ul className="w-full flex flex-wrap justify-center gap-2 lg:gap-4">
                    {lang === false ? createBlogsView1(EnglishBlogs) : createBlogsView1(PersianBlogs)}
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
                    customButtonGroup={<ButtonGroup />}
                    rtl={lang === false ? false : true}
                >
                    {lang === false ? createBlogsView2(EnglishBlogs) : createBlogsView2(PersianBlogs)}
                </Carousel>
            </MediaQuery>
        </div>
    );
}