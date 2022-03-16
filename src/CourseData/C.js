import CData from "./CData";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import "../coursesStyles.css";

function C() {
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
          <a href="#" className="header--link">
            Course topics
          </a>
          <Link to="/expandskills2" className="header--link">
            Home
          </Link>
        </div>
      </div>
      <div className="course--container">
        <div className="nav-items"></div>
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
