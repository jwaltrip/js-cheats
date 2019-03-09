import React from "react";
import Highlight from "react-highlight";
import { Badge } from "reactstrap";
import "./sub-pages.css";

class StrStartsWith extends React.Component {
  render() {
    return (
      <div>
        <h1>.startsWith()</h1>
        <hr />
        <div className="sublabel">Description:</div>
        <p className="subtext">
          Determines whether a string begins with the characters of a specified string
        </p>
        <ul>
          <li>
            Method returns <code>true</code> if the string begins with the characters, and <code>false</code> if not
          </li>
          <li>Case senistive</li>
        </ul>
        <div className="sublabel">Syntax:</div>
        <div className="syntax">
          <Highlight className='javascript'>
            {"string.startsWith(searchValue, start)"}
          </Highlight>
        </div>
        <ul>
          <li>
            <code>searchValue</code> - <Badge color="primary">required</Badge> value to search for in string
          </li>
          <li><code>start</code> - <Badge color="secondary">optional</Badge> the default index value is <code>0</code></li>
        </ul>
        <div className="sublabel">Example:</div>
        <div className="example">
          <iframe
            title="string-startsWith"
            height="400px"
            width="100%"
            src="https://repl.it/@Zgutier5/startsWith?lite=true"
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

export default StrStartsWith;
