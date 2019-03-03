import React from "react";
import "./sub-pages.css";
// import PropTypes from 'prop-types';

class ArrIncludes extends React.Component {
  render() {
    return (
      <div>
        <h1>.includes()</h1>
        <hr />
        <div className="sublabel">Description:</div>
        <p className="subtext" />
        <div className="sublabel">Syntax:</div>
        <p className="subtext" />
        <p className="subtext">Determines whether an array contains a specified element.</p>
        <p className="subtext">Returns a boolean value.</p>
        <p className="subtext">Element: the element to search for.</p> 
        <p className="subtext">Start: Optional. Default at index 0. The position in the array to start the search.</p>
        <div className="sublabel">Syntax:</div>
        <p className="subtext">array.includes(element, start)</p>
        <div className="sublabel">Example:</div>
        <div className="example" />
      </div>
    );
  }
}

export default ArrIncludes;
