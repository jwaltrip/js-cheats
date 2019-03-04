import React from "react";
import "./sub-pages.css";
// import PropTypes from 'prop-types';

class ArrJoin extends React.Component {
  render() {
    return (
      <div>
        <h1>.join()</h1>
        <hr />
        <div className="sublabel">Description:</div>
        <p className="subtext">
          Creates and returns a new string by concatenating all of the elements
          in an array (or an array-like object), separated by commas or a
          specified separator string.
        </p>
        <div className="sublabel">Syntax:</div>
        <p className="subtext">arr.join("separator")</p>
        <div className="sublabel">Example:</div>
        <div className="example">
          <iframe
            height="425px"
            width="100%"
            src="https://repl.it/@sarahcheatham/join-example?lite=true"
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

export default ArrJoin;
