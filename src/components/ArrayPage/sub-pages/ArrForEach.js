import React from "react";
// import PropTypes from 'prop-types';

class ArrForEach extends React.Component {
  render() {
    return (
      <div>
        <h1>.forEach()</h1>
        <hr />
        <div className="sublabel">Description:</div>
        <p className="subtext">
          The forEach() method executes a provided function once for each array
          element.
        </p>
        <div className="sublabel">Syntax:</div>
        <p className="subtext">
          <pre>{`arr.forEach(function callback(currentValue [, index [, array]]) {
    //your iterator
}[, thisArg]);`}</pre>
        </p>
        <div className="sublabel">Example:</div>
        <div className="example">
          {" "}
          <iframe
            height="400px"
            width="100%"
            src="https://repl.it/@William_Cruz/GrayAbleJavadoc?lite=true"
            scrolling="no"
            frameborder="no"
            allowtransparency="true"
            allowfullscreen="true"
            sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
          >
            {" "}
          </iframe>
        </div>
      </div>
    );
  }
}

export default ArrForEach;
