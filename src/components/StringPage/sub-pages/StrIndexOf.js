import React from "react";
import Highlight from "react-highlight";
import { Badge } from 'reactstrap';
import "./sub-pages.css";

class StrIndexOf extends React.Component {
  render() {
    return (
      <div>
        <h1>.indexOf()</h1>
        <hr />
        <div className="sublabel">Description:</div>
        <p className="subtext">
          The method returns the position of the first occurance of specified value in a string
        </p>
        <ul>
          <li>
            Method returns <code>-1</code> if the value to search for never occurs
          </li>
          <li>Case senistive</li>
        </ul>
        <div className="sublabel">Syntax:</div>
        <div className="syntax">
          <Highlight className="javascript">
            {"string.indexOf(searchValue, start)"}
          </Highlight>
        </div>
        <ul>
          <li><code>searchValue</code> - <Badge color="primary">required</Badge> value to search for in string</li>
          <li>
            <code>start</code> - <Badge color="secondary">optional</Badge> default is the beginning of the string
          </li>
        </ul>
        <div className="sublabel">Example:</div>
        <div className="example">
          <iframe
            title="string-indexOf"
            height="400px"
            width="100%"
            src="https://repl.it/@Zgutier5/indexOf?lite=true"
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

export default StrIndexOf;
