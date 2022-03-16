import CData from "./CData";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import "../coursesStyles.css";
import CCoursesData from "./CCoursesData";
import What from "./What";
function C() {
  const navLinks = CCoursesData.map((item) => {
    return (
      <div className="nav-link--container">
        <p>{item.title}</p>
      </div>
    );
  });
  const [navPosition, setNavPosition] = React.useState(true);
  function changePosition() {
    setNavPosition((prevNavPosition) => !prevNavPosition);
  }

  const stylePositon = navPosition ? "test" : "nav-bar--position";
  const [next, setNext] = React.useState(0);
  function changeNext() {
    setNext((prevPage) => prevPage + 1);
  }
  function changePrev() {
    setNext((prevPage) => prevPage - 1);
  }
  const [toggleDisplay, setToggleDisplay] = React.useState(false);
  function changeToggle() {
    setToggleDisplay((prevdis) => !prevdis);
  }
  const data = CData[next].text;
  return (
    <div className="course--body">
      <Header />
      <div class="header--block">
        <h1>C language</h1>
        <div className="header--link--container">
          {/* <a
            href="#"
            className="header--link course-topics-link"
            onClick={console.log("running")}
          >
            Course topics
          </a> */}
          <button
            className="header--link course-topics-link header--button"
            onClick={changePosition}
          >
            Course Topics
          </button>
          <Link to="/expandskills2" className="header--link">
            Home
          </Link>
        </div>
      </div>
      <div className="course--container">
        <div className={stylePositon}>
          <div className="nav-items">{navLinks}</div>
        </div>
        <div className="content--container"></div>
      </div>
      {/* <h1>{data}</h1>
      <button
        onClick={changeNext}
        disabled={next < 3 ? false : true}
        className="button--link"
      >
        next
      </button>
      <button
        onClick={changePrev}
        disabled={next == 0 ? true : false}
        className="button--link"
      >
        previous
      </button>
      <Link to="/expandskills2">Home</Link> */}
    </div>
  );
}

export default C;
