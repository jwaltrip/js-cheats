import React from "react";
import Highlight from "react-highlight";
import { Badge } from "reactstrap";
import "./sub-pages.css";

class StrSplit extends React.Component {
  render() {
    return (
      <div>
        <h1>.split()</h1>
        <hr />
        <div className="sublabel">Description:</div>
        <p className="subtext">
          Used to split a string into an array of substrings by a specified delimiter, and returns the new array
        </p>
        <ul>
          <li>
            If an empty string <code>""</code> is used as the delimiter, the string is split between each character
          </li>
          <li>Does not change the original string</li>
        </ul>
        <div className="sublabel">Syntax:</div>
        <div className="syntax">
          <Highlight className='javascript'>
            {"string.split(separator, limit)"}
          </Highlight>
        </div>
        <ul>
          <li>
            <code>seperator</code> - <Badge color="secondary">optional</Badge> specifies the character where the string will be split
          </li>
          <li>
            <code>limit</code> - <Badge color="secondary">optional</Badge> integer that specifies the number of splits, items after not included
          </li>
        </ul>
        <div className="sublabel">Example:</div>
        <div className="example">
          <iframe
            title="string-split"
            height="400px"
            width="100%"
            src="https://repl.it/@Zgutier5/split?lite=true"
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

export default StrSplit;
