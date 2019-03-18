import React from "react";
import Highlight from "react-highlight";
import { Badge } from "reactstrap";
import "./sub-pages.css";

class StrSlice extends React.Component {
  render() {
    return (
      <div>
        <h1>.slice()</h1>
        <hr />
        <div className="sublabel">Description:</div>
        <p className="subtext">
          Extracts parts of a string and returns the extracted parts in a new string
        </p>
        <ul>
          <li>
            Use the <code>start</code> and <code>end</code> parameters to specify the part of the string you want to extract
          </li>
          <li>Use a negative number to select from the end of the string.</li>
        </ul>
        <div className="sublabel">Syntax:</div>
        <div className="syntax">
          <Highlight className='javascript'>
            {"string.slice(start, end)"}
          </Highlight>
        </div>
        <ul>
          <li>
            <code>start</code> - <Badge color="primary">required</Badge> start index
          </li>
          <li>
            <code>end</code> - <Badge color="primary">required</Badge> final index
          </li>
        </ul>
        <div className="sublabel">Example:</div>
        <div className="example">
          <iframe
            title="string-slice"
            height="400px"
            width="100%"
            src="https://repl.it/@Zgutier5/slice?lite=true"
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

export default StrSlice;
