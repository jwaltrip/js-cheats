import React from "react";
import "./sub-pages.css";
// import PropTypes from 'prop-types';

class ArrSplice extends React.Component {
  render() {
    return (
      <div>
        <h1>splice()</h1>
        <hr />
        <div className="sublabel">Description:</div>
        <p className="subtext">Adds or removes items to/from an array.</p>
        <p className="subtext">This method changes the original array.</p>
        <p className="subtext">
          Use negative values to specify the position from the end of the array.
        </p>
        <p className="subtext">
          item1,...itemX- new items to be added to the array
        </p>
        <div className="sublabel">Syntax:</div>
        <p className="subtext">array.splice(index, howMany, item1,...itemX)</p>
        <div className="sublabel">Example:</div>
        <div className="example">
          <iframe
            height="400px"
            width="100%"
            src="https://repl.it/@William_Cruz/PeachpuffAgonizingNetbsd?lite=true"
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

export default ArrSplice;
