import React from "react";
import BadgeRequired from "../../BadgeRequired/BadgeRequired";
import BadgeOptional from "../../BadgeOptional/BadgeOptional";
import SyntaxHighlight from "../../SyntaxHighlight/SyntaxHighlight";
import "./sub-pages.css";

class StrLastIndexOf extends React.Component {
  render() {
    return (
      <div>
        <h1>.lastIndexOf()</h1>
        <hr />
        <div className="sublabel">Description:</div>
        <p className="subtext">
          The method returns the position of the last occurance of specified value in a string
        </p>
        <ul>
          <li>
            String is searched from end to beginning, and returns index if found <code>(0 = first index/character)</code>
          </li>
          <li>
            Method returns <code>-1</code> if the value to search for is not found
          </li>
          <li>Case sensitive</li>
        </ul>
        <div className="sublabel">Syntax:</div>
        <SyntaxHighlight syntax="string.lastIndexOf(searchValue, start)" />
        <ul>
          <li><code>searchValue</code> - <BadgeRequired /> value to search for in the string</li>
          <li>
            <code>start</code> - <BadgeOptional /> the default value is the beginning of the string
          </li>
        </ul>
        <div className="sublabel">Example:</div>
        <div className="example">
          <iframe
            title="string-lastIndexOf"
            height="400px"
            width="100%"
            src="https://repl.it/@Zgutier5/lastIndexOf?lite=true"
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

export default StrLastIndexOf;
