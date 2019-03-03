import React from 'react';
import "./sub-pages.css";
// import PropTypes from 'prop-types';

class ArrValue extends React.Component {
  render() {
    return (
      <div>
        <h1>valueOf()</h1>
        <hr/>
        <div className="sublabel">Description:</div>
        <p className="subtext">This method returns the array.</p>
        <p className="subtext">This method is the default method of the array object.</p>
        <p className="subtext">This will not change the original array.</p>
        <div className="sublabel">Syntax:</div>
        <p className="subtext">array.valueOf()</p>
        <div className="sublabel">Example:</div>
        <div className="example">
        </div>
      </div>
    );
  }
}

export default ArrValue;