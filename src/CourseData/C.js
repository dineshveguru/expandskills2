import CData from "./CData";
import React from "react";
import { Link } from "react-router-dom";

function C() {
  const [next, setNext] = React.useState(0);
  function changeNext() {
    setNext((prevPage) => prevPage + 1);
  }
  function changePrev() {
    setNext((prevPage) => prevPage - 1);
  }
  const data = CData[next].text;
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={changeNext} disabled={next < 3 ? false : true}>
        next
      </button>
      <button onClick={changePrev} disabled={next == 0 ? true : false}>
        previous
      </button>
      <Link to="/expandskills2">Home</Link>
    </div>
  );
}

export default C;
