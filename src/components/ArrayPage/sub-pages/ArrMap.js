import React from "react";
import Highlight from 'react-highlight';
// import PropTypes from 'prop-types';

class ArrMap extends React.Component {
  render() {
    return (
      <div>
        <h1>.map()</h1>
        <hr />
        <div className="sublabel">Description:</div>
        <p className="subtext">
          The map() method creates a new array with the results of calling a
          provided function on every element in the calling array.
        </p>
        <div className="sublabel">Syntax:</div>
        <p className="subtext">
          <Highlight className='javascript'>
            {"var new_array = arr.map(function callback(currentValue[, index[, array]]) {// Return element for new_array}[, thisArg])"}
          </Highlight>
          
        </p>
        <div className="sublabel">Example:</div>
        <div className="example">
          <iframe
            height="400px"
            width="100%"
            src="https://repl.it/@William_Cruz/QuaintEnormousTriangle?lite=true"
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

export default ArrMap;
