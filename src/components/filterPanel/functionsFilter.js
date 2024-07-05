import { Courses } from "../courseItems/courses";

export const filtersId = [];
const filterArray = [];

export const handleFilter = (nameItem) => {
  const selectedFilter = filtersId.find((obj) => {
    return obj.name === nameItem;
  });

  if (selectedFilter === undefined) {
    filtersId.push({ id: filtersId.length + 1, name: nameItem });
  } else {
    let selectedIndex = filtersId.indexOf(selectedFilter);
    filtersId.splice(selectedIndex, 1);
  }
  filtering(filtersId, Courses);
};

export const filtering = (ids, data) => {
  filterArray.length = 0;
  
  for (let i = 0; i < ids.length; i++) {
    filterArray.push(
      data.filter((el) => {
        return el.category === ids[i].name || el.instructor === ids[i].name;
      })
    );
  }

  if (ids.length === 0) {
    alert();
    filterArray.length = 0;
  }
  console.log(filterArray.flat(Infinity));
};
