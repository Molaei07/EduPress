export const FirstPoster = () => {
    return (
        <div className="w-full h-64 sm:h-80 md:h-[500px] lg:h-[600px] px-4 sm:px-16 xl:px-48 flex items-center bg-[url('./images/Image.png')] bg-cover bg-no-repeat bg-center">
            <div className="w-64 md:w-80 lg:w-96 flex flex-wrap gap-y-4">
                <h1 className="w-full font-ExoSemiBold text-2xl md:text-3xl lg:text-5xl">Build Skills With Online Course</h1>
                <p className="w-full font-JostRegular text-xs md:text-sm text-gray-500">We denounce with righteous indignation and dislike men who are so beguiled and demoralized that cannot trouble.</p>
                <button className="orangeButton">Posts comment</button>
            </div>
        </div>
    );
}