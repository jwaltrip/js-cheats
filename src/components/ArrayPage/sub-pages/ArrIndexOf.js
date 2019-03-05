import React from "react";
// import PropTypes from 'prop-types';

class ArrIndexOf extends React.Component {
  render() {
    return (
      <div>
        <h1> .indexOf() </h1> <hr />
        <div className="sublabel"> Description: </div>{" "}
        <p className="subtext">
          {" "}
          searches the array for the specified item, and returns its position.
          <ul>
            <li>returns -1 if item is not found</li>
            <li>
              If the item is present more than once, it returns the position of
              the first occurance
            </li>
          </ul>
        </p>
        <div className="sublabel"> Syntax: </div>
        <p className="subtext">array.indexOf(item, start(optional))</p>
        <div className="sublabel"> Example: </div>
        <div className="example">
          <iframe
            height="400px"
            width="100%"
            src="https://repl.it/@William_Cruz/TurbulentVacantEllipses?lite=true"
            scrolling="no"
            frameborder="no"
            allowtransparency="true"
            allowfullscreen="true"
            sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
          />
        </div>
      </div>
    );
  }
}

export default ArrIndexOf;
