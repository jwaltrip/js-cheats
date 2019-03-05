import React from "react";
// import PropTypes from 'prop-types';

class ArrLength extends React.Component {
  render() {
    return (
      <div>
        <h1>.length() </h1> <hr />
        <div className="sublabel">Description:</div>
        <p className="subtext">Returns the length of an array.</p>
        <div className="sublabel">Syntax:</div>
        <p className="subtext">arr.length()</p>
        <div className="sublabel">Example:</div>
        <div className="example">
          <iframe
            height="400px"
            width="100%"
            src="https://repl.it/@William_Cruz/KindForkedBackslash?lite=true"
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

export default ArrLength;
