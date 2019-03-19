import React from "react";
import Highlight from 'react-highlight';
import "./sub-pages.css";

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
          <Highlight className='javascript'>
            {"const newArray = oldArray.concat(value1, value2, ..., valueN)"}
          </Highlight>{" "}
        </p>{" "}
        <div className="sublabel"> Example: </div>{" "}
        <div className="example">
          <iframe
            title="array_concat"
            height="400px"
            width="100%"
            src="https://repl.it/@sarahcheatham/concat-array-example?lite=true"
            scrolling="no"
            frameBorder="no"
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
