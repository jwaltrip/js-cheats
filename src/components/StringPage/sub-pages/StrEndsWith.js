import React from "react";
import BadgeRequired from "../../BadgeRequired/BadgeRequired";
import BadgeOptional from "../../BadgeOptional/BadgeOptional";
import SyntaxHighlight from "../../SyntaxHighlight/SyntaxHighlight";
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
        <SyntaxHighlight syntax="string.endsWith(searchValue, length)" />
        <ul>
          <li>
            <code>searchValue</code> - <BadgeRequired /> value to search for in string
          </li>
          <li>
            <code>length</code> - <BadgeOptional /> the default is the length of the string
          </li>
        </ul>
        <div className="sublabel">Example:</div>
        <div className="example">
          <iframe
            title="string-endsWith"
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
