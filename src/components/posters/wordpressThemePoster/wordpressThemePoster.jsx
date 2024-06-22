const WordpressThemePoster = () => {
    return (
        <div className="w-full p-4 sm:p-0 sm:h-48 lg:h-56 flex justify-center items-center rounded-2xl bg-[url('./images/wordPressPoster.png')] bg-no-repeat bg-cover bg-center">
            <div className="w-full sm:w-[60%] md:w-1/2 flex justify-center flex-wrap gap-y-2">
                <a className="w-full text-center font-ExoSemiBold text-xs lg:text-sm" href="#">PROVIDING AMAZING</a>
                <h2 className="w-full text-center text-xl lg:text-3xl font-ExoSemiBold">Education Wordpress Theme</h2>
                <p className="font-JostRegular w-full text-center text-xs md:text-sm lg:text-base text-black md:text-gray-600">The next level of LMS WordPress Theme. Learn anytime and anywhere.</p>
                <button className="orangeButton">Explorer course</button>
            </div>
        </div>
    );
}

export default WordpressThemePoster;