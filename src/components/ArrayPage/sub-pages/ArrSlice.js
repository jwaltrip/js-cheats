import React from "react";
import "./sub-pages.css";
// import PropTypes from 'prop-types';

class ArrSlice extends React.Component {
  render() {
    return (
      <div>
        <h1>slice()</h1>
        <hr />
        <div className="sublabel">Description:</div>
        <p className="subtext">
          Returns the selected elements in an array as a new array object.
        </p>
        <p className="subtext">The original array is not changed.</p>
        <p className="subtext">Start and end are optional.</p>
        <div className="sublabel">Syntax:</div>
        <p className="subtext">array.slice(start,end)</p>
        <div className="sublabel">Example:</div>
        <div className="example">
          {" "}
          <iframe
            height="400px"
            width="100%"
            src="https://repl.it/@William_Cruz/PeachpuffAgonizingNetbsd?lite=true"
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

export default ArrSlice;
