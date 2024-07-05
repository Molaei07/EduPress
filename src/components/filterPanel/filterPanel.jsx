/* eslint-disable react/prop-types */
import CreatePanelItem from "./createPanelItems";

const FilterPanel = ({ filter }) => {
    return (
        <div className="hidden h-fit lg:flex flex-wrap gap-y-2 w-[20%] py-2">
            <CreatePanelItem filter={filter} typeOf={"category"} typeName={"Course category"} itemsName={["commercial", "office", "shop", "educate", "academy", "single family home", "studio", "university"]} number={15} />
            <CreatePanelItem filter={filter} typeOf={"instructors"} typeName={"Instructors"} itemsName={["Kenny White", "John Doe"]} number={15} />
            <CreatePanelItem filter={filter} typeOf={"price"} typeName={"Price"} itemsName={["All", "Free", "Paid"]} number={15} />
            <CreatePanelItem filter={filter} typeOf={"reviews"} typeName={"Reviews"} stars={[5, 4, 3, 2, 1]} number={"(1,025)"} />
            <CreatePanelItem filter={filter} typeOf={"level"} typeName={"Level"} itemsName={["All levels", "Beginner", "Intermidiate", "Expert"]} number={15} />
        </div>
    );
}

export default FilterPanel;