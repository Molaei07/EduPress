/* eslint-disable no-unused-vars */
import CourseView1 from "./view1/courseView1";
import CourseView2 from "./view2/courseView2";

export const ItemsView1 = ({ data, viewInfo, language }) => {
    return (
        data.map((item) => {
            return (<CourseView1 key={item.id} language={language} id={item.id} viewInfo={viewInfo} tag={item.tag} onwerCourse={item.owner} name={item.name} time={item.time} students={item.students} date={""} offPrice={item.offPrice} originalPrice={item.originalPrice} picture={item.picture} description={""} />)
        })
    );
}

export const ItemsView2 = ({ data }) => {
    return (
        data.map((item) => {
            return (<CourseView2 key={item.id} id={item.id} onwerCourse={item.owner} name={item.name} time={item.time} students={item.students} level={item.level} lesson={item.lessons} offPrice={item.offPrice} originalPrice={item.originalPrice} tag={item.tag} picture={item.picture} />)
        })
    );
}