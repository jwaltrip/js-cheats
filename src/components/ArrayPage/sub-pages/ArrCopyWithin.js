import React from "react";
// import PropTypes from 'prop-types';

class ArrCopyWithin extends React.Component {
  render() {
    return (
      <div>
        <h1>.copyWithin() </h1>
        <hr />
        <div className="sublabel">Description:</div>
        <p className="subtext">
          Copies array elements within the array, to and from specified positions.
        </p>
        <div className="sublabel">Syntax:</div>
        <p className="subtext">
          array.copyWithin(target,start,end)
          <ul>
            <h5>Target</h5>
            <li>the index position to copy he elements to.</li>
            <h5>Start</h5>
            <li>optional index position to copy from.</li>
            <h5>End</h5>
            <li>
              optional position to stop copying elements. <br />*
              <u>default is array.length</u>
            </li>
          </ul>
        </p>
        <div className="sublabel">Example:</div>
        <div className="example">
          <iframe
            height="400px"
            width="100%"
            src="https://repl.it/@William_Cruz/ExtrovertedPungentRule?lite=true"
            scrolling="no"
            frameBorder="no"
            allowTransparency="true"
            allowFullScreen="true"
            sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
          />
        </div>
      </div>
    );
  }
}

export default ArrCopyWithin;
