import React from "react";
import Highlight from "react-highlight";
import { Badge } from "reactstrap";
import "./sub-pages.css";

class StrParseInt extends React.Component {
  render() {
    return (
      <div>
        <h1>.parseInt()</h1>
        <hr />
        <div className="sublabel">Description:</div>
        <p className="subtext">
          The method parses a string containing a number value and returns an integer
        </p>
        <ul>
          <li>Only the first number in the string is returned</li>
          <li>
            If the first character cannot be converted to a number, <code>parseInt()</code> returns <code>NaN</code>
          </li>
        </ul>
        <div className="sublabel">Syntax:</div>
        <div className="syntax">
          <Highlight className='javascript'>
            {"string.parseInt(string, radix)"}
          </Highlight>
        </div>
        <ul>
          <li><code>string</code> - <Badge color="primary">required</Badge> string containing a number to be converted to number type</li>
          <li><code>radix</code> - <Badge color="secondary">optional</Badge> default value is base <code>10</code></li>
        </ul>
        <div className="sublabel">Example:</div>
        <div className="example">
          <iframe
            title="string-parseInt"
            height="400px"
            width="100%"
            src="https://repl.it/@Zgutier5/parseInt?lite=true"
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

export default StrParseInt;
