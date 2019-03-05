import React from "react";
// import PropTypes from 'prop-types';

class ArrReverse extends React.Component {
  render() {
    return (
      <div>
        <h1>.reverse() </h1>
        <hr />
        <div className="sublabel"> Description: </div>
        <p className="subtext">Reverses order of items in array.</p>
        <div className="sublabel"> Syntax:</div>
        <p className="subtext">array.reverse()</p>
        <div className="sublabel"> Example: </div>
        <div className="example">
          <iframe
            height="400px"
            width="100%"
            src="https://repl.it/@William_Cruz/FatherlyFondFlash?lite=true"
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

export default ArrReverse;
