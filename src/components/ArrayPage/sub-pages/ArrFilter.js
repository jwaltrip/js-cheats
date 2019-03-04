import React from "react";
// import PropTypes from 'prop-types';

class ArrFilter extends React.Component {
  render() {
    return (
      <div>
        <h1> .filter() </h1> <hr />
        <div className="sublabel"> Description: </div>
        <p className="subtext">
          The filter() method creates a new array with all elements that pass
          the test implemented by the provided function.
        </p>
        <div className="sublabel"> Syntax: </div>
        <p className="subtext">
          <pre>{`var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])`}</pre>
        </p>
        <div className="sublabel"> Example: </div>{" "}
        <div className="example">
          {" "}
          <iframe
            height="400px"
            width="100%"
            src="https://repl.it/@William_Cruz/RingedPinkGlueware?lite=true"
            scrolling="no"
            frameborder="no"
            allowtransparency="true"
            allowfullscreen="true"
            sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
          >
            {" "}
          </iframe>
        </div>
      </div>
    );
  }
}

export default ArrFilter;
