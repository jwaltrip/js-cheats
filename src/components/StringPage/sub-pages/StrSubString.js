import React from "react";
import Highlight from "react-highlight";
import { Badge } from "reactstrap";
import "./sub-pages.css";

class StrSubString extends React.Component {
  render() {
    return (
      <div>
        <h1>.substring()</h1>
        <hr />
        <div className="sublabel">Description:</div>
        <p className="subtext">
          Extracts the characters from a string, between two specified indices, and returns the new substring
        </p>
        <ul>
          <li>
            Extracts the characters in a string between <code>start</code> and <code>end</code>, not including <code>end</code> index char itself
          </li>
          <li>Does not change the original string</li>
        </ul>
        <div className="sublabel">Syntax:</div>
        <div className="syntax">
          <Highlight className='javascript'>
            {"string.substring(start, end)"}
          </Highlight>
        </div>
        <ul>
          <li>
            <code>start</code> - <Badge color="primary">required</Badge> the index of the first character to include in the returned substring
          </li>
          <li>
            <code>end</code> - <Badge color="secondary">optional</Badge> the index of the first character to exclude from the returned substring
          </li>
        </ul>
        <div className="sublabel">Example:</div>
        <div className="example">
          <iframe
            title="string-substring"
            height="400px"
            width="100%"
            src="https://repl.it/@Zgutier5/substring?lite=true"
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

export default StrSubString;
