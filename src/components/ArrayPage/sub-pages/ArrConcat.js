import React from "react";
import "./sub-pages.css";
// import PropTypes from 'prop-types';

class ArrConcat extends React.Component {
  render() {
    return (
      <div>
        <h1> .concat() </h1> <hr />
        <div className="sublabel"> Description: </div>{" "}
        <p className="subtext"> Used to merge two or more arrays. </p>{" "}
        <p className="subtext">
          {" "}
          This method does not mutate the original array, instead it returns a
          new array.{" "}
        </p>{" "}
        <div className="sublabel"> Syntax: </div>{" "}
        <p className="subtext">
          const newArray = oldArray.concat(value1, value2, ..., valueN){" "}
        </p>{" "}
        <div className="sublabel"> Example: </div>{" "}
        <div className="example">
          <iframe
            height="400px"
            width="100%"
            src="https://repl.it/@sarahcheatham/concat-array-example?lite=true"
            scrolling="no"
            frameborder="no"
            allowtransparency="true"
            allowfullscreen="true"
            sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
          >
            {" "}
          </iframe>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default ArrConcat;
