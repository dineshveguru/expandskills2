import "./styles.css";
import Data from "./CoursesData";

function Body() {
  const blocks = Data.map((item) => {
    return (
      <div className="course--block">
        <p>{item.CourseName}</p>
      </div>
    );
  });
  return (
    <main className="body--main">
      <p className="course--heading">Courses</p>
      <div className="courses--container">{blocks}</div>
    </main>
  );
}

export default Body;
