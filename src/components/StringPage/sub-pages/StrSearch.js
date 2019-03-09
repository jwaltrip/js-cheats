import React from "react";
import Highlight from "react-highlight";
import { Badge } from "reactstrap";
import "./sub-pages.css";

class StrSearch extends React.Component {
  render() {
    return (
      <div>
        <h1>.search()</h1>
        <hr />
        <div className="sublabel">Description:</div>
        <p className="subtext">
          Searches a string for a specified value, and returns the index of the match
        </p>
        <ul>
          <li><code>searchValue</code> can be a string or a regular expression</li>
          <li>Returns <code>-1</code> if no match is found</li>
        </ul>
        <div className="sublabel">Syntax:</div>
        <div className="syntax">
          <Highlight className='javascript'>
            {"string.search(searchValue)"}
          </Highlight>
        </div>
        <ul>
          <li>
            <code>searchValue</code> - <Badge color="primary">required</Badge> value to search for in string
          </li>
        </ul>
        <div className="sublabel">Example:</div>
        <div className="example">
          <iframe
            title="string-search"
            height="400px"
            width="100%"
            src="https://repl.it/@Zgutier5/search?lite=true"
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

export default StrSearch;
