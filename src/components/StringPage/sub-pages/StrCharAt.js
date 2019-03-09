import React from "react";
import Highlight from 'react-highlight';
import "./sub-pages.css";

class StrCharAt extends React.Component {
  render() {
    return (
      <div>
        <h1>.charAt()</h1>
        <hr />
        <div className="sublabel">Description:</div>
        <p className="subtext">
          Returns the characters at the specified index in a string
        </p>
        <ul>
          <li>Index of the first character is <code>0</code></li>
          <li>Index of the last character is <code>string.length - 1</code></li>
        </ul>
        <div className="sublabel">Syntax:</div>
        <div className="syntax">
          <Highlight className='javascript'>
            {"string.charAt(index)"}
          </Highlight>
        </div>
        <div className="sublabel">Example:</div>
        <div className="example">
          <iframe
            height="400px"
            width="100%"
            src="https://repl.it/@Zgutier5/charAt?lite=true"
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

export default StrCharAt;
