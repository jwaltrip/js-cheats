import React from 'react';
// import PropTypes from 'prop-types';

class NumOverview extends React.Component {
  render() {
    return (
      <div>
        <h1>Javascript Numbers Overview</h1>
        <hr/>

        <p>JavaScript has only one type of number. Numbers can be written with or without decimals.
        Unlike many other programming languages, JavaScript does not define different types of numbers, like integers, short, long, floating-point etc.
        JavaScript numbers are always stored as double precision floating point numbers, following the international IEEE 754 standard. 
        </p>
      </div>
    );
  }
}

export default NumOverview;