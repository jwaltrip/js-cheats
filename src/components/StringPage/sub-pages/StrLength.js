import React from "react";
import Highlight from 'react-highlight';
import "./sub-pages.css";

class StrLength extends React.Component {
  render() {
    return (
      <div>
        <h1>.length</h1>
        <hr />
        <div className="sublabel">Description:</div>
        <p className="subtext">
          Returns the number of characters in a string
        </p>
        <div className="sublabel">Syntax:</div>
        <div className="syntax">
          <Highlight className='javascript'>
            {"string.length"}
          </Highlight>
        </div>
        <div className="sublabel">Example:</div>
        <div className="example">
          <iframe
            title="string-length"
            height="400px"
            width="100%"
            src="https://repl.it/@Zgutier5/length?lite=true"
            scrolling="no"
            frameBorder="no"
            allowFullScreen={true}
            sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
          />
        </div>
      </div>
    );
  }
}

export default StrLength;
