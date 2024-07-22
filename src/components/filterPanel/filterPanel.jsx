/* eslint-disable react/prop-types */
import FilterItems from "../hamburgerMenu/filterItems/filterItems";

const FilterPanel = ({ set, language }) => {
    return (
        <div className="hidden h-fit lg:flex flex-wrap gap-y-2 w-[20%] py-2">
            <FilterItems set={set} language={language} />
        </div>
    );
}

export default FilterPanel;