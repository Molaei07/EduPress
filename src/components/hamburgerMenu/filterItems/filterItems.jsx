/* eslint-disable react/prop-types */
import { useTranslation } from "react-multi-lang";
import CreatePanelItem from "../../filterPanel/createPanelItems";

const FilterItems = ({ set, language }) => {
    const translate = useTranslation()
    return (
        <>
            <CreatePanelItem filter={set} language={language} typeOf={"category"} typeName={translate("filterButtons.part1.partName")} itemsName={[
                translate("filterButtons.part1.button1"),
                translate("filterButtons.part1.button2"),
                translate("filterButtons.part1.button3"),
                translate("filterButtons.part1.button4"),
                translate("filterButtons.part1.button5"),
                translate("filterButtons.part1.button6"),
                translate("filterButtons.part1.button7"),
                translate("filterButtons.part1.button8")
            ]} number={15} />
            <CreatePanelItem filter={set} language={language} typeOf={"instructors"} typeName={translate("filterButtons.part2.partName")} itemsName={[
                translate("filterButtons.part2.button1"),
                translate("filterButtons.part2.button2")
            ]} number={15} />
            <CreatePanelItem filter={set} language={language} typeOf={"price"} typeName={translate("filterButtons.part3.partName")} itemsName={[
                translate("filterButtons.part3.button1"),
                translate("filterButtons.part3.button2")
            ]} number={15} />
            <CreatePanelItem filter={set} language={language} typeOf={"reviews"} typeName={translate("filterButtons.part4.partName")} stars={[5, 4, 3, 2, 1]} number={"(1,025)"} />
            <CreatePanelItem filter={set} language={language} typeOf={"level"} typeName={translate("filterButtons.part5.partName")} itemsName={[
                translate("filterButtons.part5.button1"),
                translate("filterButtons.part5.button2"),
                translate("filterButtons.part5.button3")
            ]} number={15} />
        </>
    );
}

export default FilterItems;