import React from "react";
import BadgeRequired from "../../BadgeRequired/BadgeRequired";
import SyntaxHighlight from "../../SyntaxHighlight/SyntaxHighlight";
import "./sub-pages.css";

class StrReplace extends React.Component {
  render() {
    return (
      <div>
        <h1>.replace()</h1>
        <hr />
        <div className="sublabel">Description:</div>
        <p className="subtext">
          The method searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced
        </p>
        <ul>
          <li>Only the first instance of the value will be replaced</li>
        </ul>
        <div className="sublabel">Syntax:</div>
        <SyntaxHighlight syntax="string.replace(searchValue, newValue)" />
        <ul>
          <li>
            <code>searchValue</code> - <BadgeRequired /> value to search for in string to be replaced
          </li>
          <li>
            <code>newValue</code> - <BadgeRequired /> the replacement value
          </li>
        </ul>
        <div className="sublabel">Example:</div>
        <div className="example">
          <iframe
            title="string-replace"
            height="400px"
            width="100%"
            src="https://repl.it/@Zgutier5/replace?lite=true"
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

export default StrReplace;
