/* eslint-disable react/prop-types */
const ButtonGroup = ({ next, previous, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
        <div className="hidden carousel-button-group absolute w-full bottom-0 left-0 sm:flex justify-center gap-x-2">
            <button className={currentSlide === 0 ? 'disable' : 'sliderLeftBtn'} onClick={() => previous()}></button>
            <button onClick={() => next()} className="sliderRightBtn"></button>
        </div>
    );
};
export default ButtonGroup