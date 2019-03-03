import React from 'react';
import "./sub-pages.css";
// import PropTypes from 'prop-types';

class ArrSort extends React.Component {
  render() {
    return (
      <div>
        <h1>sort()</h1>
        <hr/>
        <div className="sublabel">Description:</div>
        <p className="subtext">Sorts the items of an array.</p>
        <p className="subtext">The sort order can be either alphabetic or numeric and either ascending or descending.</p>
        <p className="subtext">By default, the sort method sorts the values as strings in alphabetical and ascending order.</p>
        <p className="subtext">This method chagnes the original array.</p>
        <div className="sublabel">Syntax:</div>
        <p className="subtext">array.sort()</p>
        <div className="sublabel">Example:</div>
        <div className="example">
        </div>
      </div>
    );
  }
}

export default ArrSort;