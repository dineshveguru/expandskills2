import CData from "./CData";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import "../coursesStyles.css";
import CCoursesData from "./CCoursesData";
import C_1 from "./1";
import C_2 from "./2";
import C_topics from "./C_topics";
import TopicLink from "../CourseTopicButton";

function C() {
  const [next, setNext] = React.useState(0);
  function changeNext() {
    setNext((prevPage) => prevPage + 1);
  }
  function changePrev() {
    setNext((prevPage) => prevPage - 1);
  }

  const navLinks = CCoursesData.map((item) => {
    function changePage(topicID) {
      setNext((prevPage) => topicID - 1);
    }

    return (
      <TopicLink
        key={item.id}
        topicName={item.title}
        id={item.id}
        change={changePage}
      />
    );
  });
  let page = C_topics[next].topic;

  const [navPosition, setNavPosition] = React.useState(true);
  function changePosition() {
    setNavPosition((prevNavPosition) => !prevNavPosition);
  }

  const stylePositon = navPosition ? "test" : "nav-bar--position";

  const [toggleDisplay, setToggleDisplay] = React.useState(false);
  function changeToggle() {
    setToggleDisplay((prevdis) => !prevdis);
  }

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
        <div className="content--container">
          <div>{page}</div>
          <button
            onClick={changeNext}
            disabled={next + 1 == C_topics.length ? true : false}
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
        </div>
      </div>
    </div>
  );
}

export default C;
