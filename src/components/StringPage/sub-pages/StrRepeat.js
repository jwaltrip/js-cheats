import React from "react";
import Highlight from "react-highlight";
import { Badge } from "reactstrap";
import "./sub-pages.css";

class StrRepeat extends React.Component {
  render() {
    return (
      <div>
        <h1>.repeat()</h1>
        <hr />
        <div className="sublabel">Description:</div>
        <p className="subtext">
          The method returns a new string with a specified number of copies of the string it was called on
        </p>
        <div className="sublabel">Syntax:</div>
        <div className="syntax">
          <Highlight className='javascript'>
            {"string.repeat(count)"}
          </Highlight>
        </div>
        <ul>
          <li>
            <code>count</code> - <Badge color="primary">required</Badge> number of times the original string value should be repeated in the new string
          </li>
        </ul>
        <div className="sublabel">Example:</div>
        <div className="example">
          <iframe
            height="400px"
            width="100%"
            src="https://repl.it/@Zgutier5/repeat?lite=true"
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

export default StrRepeat;
