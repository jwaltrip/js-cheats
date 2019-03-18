import React from "react";
import Highlight from "react-highlight";
import { Badge } from "reactstrap";
import "./sub-pages.css";

class StrSubstr extends React.Component {
  render() {
    return (
      <div>
        <h1>.substr()</h1>
        <hr />
        <div className="sublabel">Description:</div>
        <p className="subtext">
          Extracts parts of a string, beginning at the character at the specified position, and it returns the resulting sub-string
        </p>
        <ul>
          <li>To extract from the end of a string, use negative numbers</li>
          <li>Does not change the orginal string</li>
        </ul>
        <div className="sublabel">Syntax:</div>
        <div className="syntax">
          <Highlight className='javascript'>
            {"string.substr(start, length)"}
          </Highlight>
        </div>
        <ul>
          <li>
            <code>start</code> - <Badge color="primary">required</Badge> the index of the first character to include in the returned substring
          </li>
          <li>
            <code>length</code> - <Badge color="secondary">optional</Badge> number of characters to extract
          </li>
        </ul>
        <div className="sublabel">Example:</div>
        <div className="example">
          <iframe
            title="string-substr"
            height="400px"
            width="100%"
            src="https://repl.it/@Zgutier5/substr?lite=true"
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

export default StrSubstr;
