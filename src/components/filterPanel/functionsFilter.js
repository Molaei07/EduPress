import { Courses } from "../courseItems/courses";

export const filtersId = [];
const filterArray = [];

export const handleFilter = (nameItem, set) => {
  const selectedFilter = filtersId.find((obj) => {
    return obj.name === nameItem;
  });

  if (selectedFilter === undefined) {
    filtersId.push({ id: filtersId.length + 1, name: nameItem });
  } else {
    let selectedIndex = filtersId.indexOf(selectedFilter);
    filtersId.splice(selectedIndex, 1);
  }
  filtering(filtersId, Courses, set);
};

export const filtering = (ids, data, set) => {
  filterArray.length = 0;
  // Filtering the courses array
  for (let i = 0; i < ids.length; i++) {
    filterArray.push(
      data.filter((el) => {
        return el.category === ids[i].name || el.instructor === ids[i].name;
      })
    );
  }
  // Clear the filterArray after clear filtersId array
  if (ids.length === 0) {
    filterArray.length = 0;
  }
  // Delete duplicate items
  const newFilterArray = [...new Set(filterArray.flat(Infinity))]
  // Set to State
  set(newFilterArray)
};
