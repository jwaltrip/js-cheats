import React from "react";
import "./sub-pages.css";
// import PropTypes from 'prop-types';

class ArrOverview extends React.Component {
  render() {
    return (
      <div>
        <h1> Javascript Arrays Overview </h1> <hr />
        <h2>ARRAY</h2>
        <p className="ex1">
          An array is an ordered collection of data(either primitive or object
          depending upon the language).Arrays are used to store multiple values
          in a single variable.This is compared to a variable that can store
          only one value.Each item in an array has a number attached to it,
          called a numeric index, that allows you to access it.In JavaScript,
          arrays start at index zero and can be manipulated with various
          methods.What an array in JavaScript looks like:{" "}
        </p>{" "}
        <p className="ex1">
          <ol>
            <li>var myArray = [1, 2, 3, 4];</li>
            <li>
              var catNamesArray = ["Jacqueline", "Sophia", "Autumn"];
            </li>{" "}
            <li>{`//Arrays in JavaScript can hold different types of data, as shown
              above.`}</li>
          </ol>
        </p>
      </div>
    );
  }
}

export default ArrOverview;
