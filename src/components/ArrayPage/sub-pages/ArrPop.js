import React from 'react';
import "./sub-pages.css";
// import PropTypes from 'prop-types';

class ArrPop extends React.Component {
  render() {
    return (
      <div>
        <h1>pop()</h1>
        <hr/>
        <div className="sublabel">Description:</div>
        <p className="subtext">Removes the last element of an array.</p>
        <p className="subtext">This method changes the length of the array.</p>
        <p className="subtext">Returns the removed element.</p>
        <div className="sublabel">Syntax:</div>
        <p className="subtext">array.pop()</p>
        <div className="sublabel">Example:</div>
        <div className="example">
        </div>
      </div>
    );
  }
}

export default ArrPop;