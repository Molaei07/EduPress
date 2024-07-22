/* eslint-disable react/prop-types */
const Rate = ({rate, star}) => {
    return (
        <div className="w-full h-fit flex items-center gap-x-2 sm:gap-x-4">
            <div>
                <img className="w-[100px] h-[15px]" src={`../../../../public/images/Rate${star}.png`} alt="Rate" />
            </div>
            <div className="min-w-8 text-sm sm:text-base text-gray-600 dark:text-gray-300 font-JostRegular">{rate}%</div>
            <div className="w-[590px] h-2 flex justify-start items-start bg-gray-300">
                <div style={{width: rate + "%"}} className="h-full bg-yellow-500"></div>
            </div>
        </div>
    );
}

export default Rate;