import "./styles.css";
import Data from "./CoursesData";
import { Link } from "react-router-dom";

function Body() {
  const blocks = Data.map((item) => {
    return (
      <Link to={`/${item.CourseName}`}>
        <div className="course--block">
          <p>{item.CourseName}</p>
          <img
            src={require(`./images/${item.img}`)}
            className="course--image"
          />
        </div>
      </Link>
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
