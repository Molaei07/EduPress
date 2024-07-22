/* eslint-disable react/prop-types */
const ButtonGroup = ({ language, next, previous, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;

    const goToNext = () => {
        console.log(language)
        if (language === false) {
            next();
        } else {
            previous()
        }
    }

    const goToPrevious = () => {
        if (language === false) {
            previous();
        } else {
            next()
        }
    }

    return (
        <div dir="ltr" className="hidden carousel-button-group absolute w-full bottom-0 left-0 sm:flex justify-center gap-x-2">
            <button className={currentSlide === 0 ? 'disable' : 'sliderLeftBtn'} onClick={() => goToPrevious()}></button>
            <button onClick={() => goToNext()} className="sliderRightBtn"></button>
        </div>
    );
};
export default ButtonGroup