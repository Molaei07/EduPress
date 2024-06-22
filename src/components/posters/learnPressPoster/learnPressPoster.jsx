const LearnPressPoster = () => {
    return (
        <div className="w-full sm:h-48 lg:h-72 flex items-center p-4 lg:p-10 rounded-2xl bg-[url('./images/Mask.png')] bg-auto sm:bg-cover bg-no-repeat bg-left sm:bg-center">
            <div className="w-full sm:w-[40%] flex flex-wrap">
                <a className="w-full font-ExoSemiBold text-xs lg:text-sm text-gray-700 mb-1 lg:mb-2" href="#">GET MORE POWER FROM</a>
                <h1 className="w-full font-ExoSemiBold text-xl lg:text-3xl mb-2 lg:mb-4">LearnPress Add-Ons</h1>
                <p className="w-full font-JostRegular text-xs lg:text-sm text-gray-700 mb-2 lg:mb-4">The next level of LearnPress - LMS WordPress Plugin. More Powerful, Flexible and Magical Inside.</p>
                <button className="orangeButton px-2 py-1 lg:py-2 text-sm lg:text-base lg:px-4">Explorer course</button>
            </div>
        </div>
    );
}

export default LearnPressPoster;