import React from "react";
import Highlight from "react-highlight";
import { Badge } from 'reactstrap';
import "./sub-pages.css";

class StrEndsWith extends React.Component {
  render() {
    return (
      <div>
        <h1>.endsWith()</h1>
        <hr />
        <div className="sublabel">Description:</div>
        <p className="subtext">
          Determines whether a string ends with the characters of a specified string
        </p>
        <ul>
          <li>
            Method returns <code>true</code> if the string ends with the characters, and <code>false</code> if not
          </li>
          <li>Case sensitive</li>
        </ul>
        <div className="sublabel">Syntax:</div>
        <div className="syntax">
          <Highlight className='javascript'>
            {"string.endsWith(searchValue, length)"}
          </Highlight>
        </div>
        <ul>
          <li>
            <code>searchValue</code> - <Badge color="primary">required</Badge> value to search for in string
          </li>
          <li>
            <code>length</code> - <Badge color="secondary">optional</Badge> the default is the length of the string
          </li>
        </ul>
        <div className="sublabel">Example:</div>
        <div className="example">
          <iframe
            height="400px"
            width="100%"
            src="https://repl.it/@Zgutier5/endsWtih?lite=true"
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

export default StrEndsWith;
