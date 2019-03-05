import React from "react";
// import PropTypes from 'prop-types';

class ArrShift extends React.Component {
  render() {
    return (
      <div>
        <h1> .shift() </h1> <hr />
        <div className="sublabel"> Description: </div>
        <p className="subtext">Removes the first item of an array</p>
        <ul>
          <li>Changes the length of the array</li>
          <li>Return value of the shift method is the removed item</li>
        </ul>
        <div className="sublabel"> Syntax: </div>{" "}
        <p className="subtext"> array.shift() </p>{" "}
        <div className="sublabel"> Example: </div>
        <div className="example">
          <iframe
            height="400px"
            width="100%"
            src="https://repl.it/@William_Cruz/UnhappyKeyAbandonware?lite=true"
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

export default ArrShift;
