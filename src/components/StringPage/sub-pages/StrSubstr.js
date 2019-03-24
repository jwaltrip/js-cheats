import React from "react";
import BadgeRequired from "../../BadgeRequired/BadgeRequired";
import BadgeOptional from "../../BadgeOptional/BadgeOptional";
import SyntaxHighlight from "../../SyntaxHighlight/SyntaxHighlight";
import "./sub-pages.css";

class StrSubstr extends React.Component {
  render() {
    return (
      <div>
        <h1>.substr()</h1>
        <hr />
        <div className="sublabel">Description:</div>
        <p className="subtext">
          Extracts parts of a string, beginning at the character at the specified position, and it returns the resulting sub-string
        </p>
        <ul>
          <li>To extract from the end of a string, use negative numbers</li>
          <li>Does not change the orginal string</li>
        </ul>
        <div className="sublabel">Syntax:</div>
        <SyntaxHighlight syntax="string.substr(start, length)" />
        <ul>
          <li>
            <code>start</code> - <BadgeRequired /> the index of the first character to include in the returned substring
          </li>
          <li>
            <code>length</code> - <BadgeOptional /> number of characters to extract. Default is <code>string.length</code>
          </li>
        </ul>
        <div className="sublabel">Example:</div>
        <div className="example">
          <iframe
            title="string-substr"
            height="400px"
            width="100%"
            src="https://repl.it/@Zgutier5/substr?lite=true"
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

export default StrSubstr;
