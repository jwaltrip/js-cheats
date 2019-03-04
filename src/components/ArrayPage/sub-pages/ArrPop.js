import React from "react";
import "./sub-pages.css";
// import PropTypes from 'prop-types';

class ArrPop extends React.Component {
  render() {
    return (
      <div>
        <h1>pop()</h1>
        <hr />
        <div className="sublabel">Description:</div>
        <p className="subtext">Removes the last element of an array.</p>
        <p className="subtext">This method changes the length of the array.</p>
        <p className="subtext">Returns the removed element.</p>
        <div className="sublabel">Syntax:</div>
        <p className="subtext">array.pop()</p>
        <div className="sublabel">Example:</div>
        <div className="example">
          {" "}
          <iframe
            height="400px"
            width="100%"
            src="https://repl.it/@William_Cruz/LastingDarkgrayMacro?lite=true"
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

export default ArrPop;
