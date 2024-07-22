/* eslint-disable react/prop-types */
import { ItemsView1, ItemsView2 } from "../../../courseItems/createItem";

const AllCourseGrid = ({view, data}) => {
    return (
        <ul className="w-full flex flex-wrap gap-2 sm:gap-4 mt-6">
            {view === 'view2' ? <ItemsView2 data={data} /> : <ItemsView1 data={data} viewInfo={view} />}
        </ul>
    );
}

export default AllCourseGrid;