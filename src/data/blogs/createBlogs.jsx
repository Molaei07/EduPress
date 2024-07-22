import CourseView1 from "../../components/courseItems/view1/courseView1";
import CourseView2 from "../../components/courseItems/view2/courseView2";

export const createBlogsView1 = (data) => {
  return data.map((element) => {
    return (
      <CourseView1
        key={element.id}
        name={element.name}
        date={element.date}
        picture={element.picture}
        description={element.description}
        tag={""}
        onwerCourse={""}
        time={""}
        students={""}
        offPrice={""}
        originalPrice={""}
      />
    );
  });
};

export const createBlogsView2 = (data) => {
    return data.map((element) => {
      return (
        <CourseView2
          key={element.id}
          name={element.name}
          date={element.date}
          picture={element.picture}
          description={element.description}
          tag={""}
          onwerCourse={""}
          time={""}
          students={""}
          offPrice={""}
          originalPrice={""}
        />
      );
    });
  };