import { TopCategories } from "../../components/gridViews/categories/categories";
import { FeaturedCourses } from "../../components/gridViews/course/featuredCourses/featuredCourses";
import { LatestArticles } from "../../components/gridViews/blogs/latestArticles/latestArticles";
import StudentFeedbacks from "../../components/gridViews/feedbacks/studentFeedbacks/studentFeedbacks";
import { FirstPoster } from "../../components/posters/firstPoster/firstPoster";
import { GoBeginPoster } from "../../components/posters/goBeginPoster/goBeginPoster";
import { GrowSkillPoster } from "../../components/posters/growSkillPoster/growSkillPoster";
import LearnPressPoster from "../../components/posters/learnPressPoster/learnPressPoster";
import WordpressThemePoster from "../../components/posters/wordpressThemePoster/wordpressThemePoster";
import { Statistics } from "../../components/statistics/statistics";
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { setScrollPosition } from "../../components/copyPart/copy";

const Home = () => {

    const location = useLocation()

    useEffect(() => {
        setScrollPosition(location.search)
    }, [])

    return (
        <>
            <FirstPoster />
            <div className="w-full max-w-screen-2xl px-4 sm:px-16 xl:px-48 flex justify-center flex-wrap gap-10 lg:gap-20">
                <TopCategories />
                <FeaturedCourses language={useOutletContext()} />
                <LearnPressPoster />
                <Statistics />
                <GrowSkillPoster />
                <WordpressThemePoster />
                <StudentFeedbacks language={useOutletContext()} />
                <GoBeginPoster />
                <LatestArticles language={useOutletContext()} />
            </div>
        </>
    );
}

export default Home;