/* eslint-disable react/prop-types */
const CopyButton = ({ getFunction, set }) => {
    return (
        <span onClick={(event) => { getFunction(event, set) }} className="hover:cursor-pointer font-ExoSemiBold text-2xl">#</span>
    );
}

export default CopyButton;