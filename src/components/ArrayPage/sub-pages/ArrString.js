import React from 'react';
import "./sub-pages.css";
// import PropTypes from 'prop-types';

class ArrString extends React.Component {
  render() {
    return (
      <div>
        <h1>toString()</h1>
        <hr/>
        <div className="sublabel">Description:</div>
        <p className="subtext">Converts an array into a string and returns the result.</p>
        <p className="subtext">The returned string will seperate the elements in the array with commas.</p>
        <div className="sublabel">Syntax:</div>
        <p className="subtext">array.toString()</p>
        <div className="sublabel">Example:</div>
        <div className="example">
        </div>
      </div>
    );
  }
}

export default ArrString;