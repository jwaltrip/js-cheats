import React from "react";
import "./sub-pages.css";
// import PropTypes from 'prop-types';

class ArrUnshift extends React.Component {
  render() {
    return (
      <div>
        <h1>unshift()</h1>
        <hr />
        <div className="sublabel">Description:</div>
        <p className="subtext">
          Adds one or more items to the beginning of the array and returns the
          new length of the array.
        </p>
        <div className="sublabel">Syntax:</div>
        <p className="subtext">array.unshift(item1, item2,...,itemX)</p>
        <div className="sublabel">Example:</div>
        <div className="example">
          <iframe
            height="400px"
            width="100%"
            src="https://repl.it/@William_Cruz/CelebratedGlisteningMenu?lite=true"
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

export default ArrUnshift;
