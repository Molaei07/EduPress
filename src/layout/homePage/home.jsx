import { TopCategories } from "../../components/gridViews/categories/categories";
import { FeaturedCourses } from "../../components/gridViews/course/featuredCourses/featuredCourses";
import { LatestArticles } from "../../components/gridViews/course/latestArticles/latestArticles";
import StudentFeedbacks from "../../components/gridViews/feedbacks/studentFeedbacks/studentFeedbacks";
import { FirstPoster } from "../../components/posters/firstPoster/firstPoster";
import { GoBeginPoster } from "../../components/posters/goBeginPoster/goBeginPoster";
import { GrowSkillPoster } from "../../components/posters/growSkillPoster/growSkillPoster";
import LearnPressPoster from "../../components/posters/learnPressPoster/learnPressPoster";
import WordpressThemePoster from "../../components/posters/wordpressThemePoster/wordpressThemePoster";
import { Statistics } from "../../components/statistics/statistics";

export const Home = () => {
    return (
        <>
            <FirstPoster />
            <div className="w-full px-4 sm:px-16 xl:px-48 flex justify-center flex-wrap gap-10 lg:gap-20">
                <TopCategories />
                <FeaturedCourses />
                <LearnPressPoster />
                <Statistics />
                <GrowSkillPoster />
                <WordpressThemePoster />
                <StudentFeedbacks />
                <GoBeginPoster />
                <LatestArticles />
            </div>
        </>
    );
}