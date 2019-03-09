import React from "react";
import Highlight from "react-highlight";
import { Badge } from 'reactstrap';
import "./sub-pages.css";

class StrMatch extends React.Component {
  render() {
    return (
      <div>
        <h1>.match()</h1>
        <hr />
        <div className="sublabel">Description:</div>
        <p className="subtext">
          The method searches a string for a match against a regular expression, and returns the matches as an array object
        </p>
        <div className="sublabel">Syntax:</div>
        <div className="syntax">
          <Highlight className='javascript'>
            {"string.match(regexp)"}
          </Highlight>
        </div>
        <ul>
          <li>
            <code>regexp</code> - <Badge color="primary">required</Badge> regex expression to find match for
          </li>
        </ul>
        <div className="sublabel">Example:</div>
        <div className="example">
          <iframe
            title="string-match"
            height="400px"
            width="100%"
            src="https://repl.it/@Zgutier5/match?lite=true"
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

export default StrMatch;
