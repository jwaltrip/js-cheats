import React from "react";
import BadgeRequired from "../../BadgeRequired/BadgeRequired";
import BadgeOptional from "../../BadgeOptional/BadgeOptional";
import SyntaxHighlight from "../../SyntaxHighlight/SyntaxHighlight";
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
        <SyntaxHighlight syntax="string.substring(start, end)" />
        <ul>
          <li>
            <code>start</code> - <BadgeRequired /> the index of the first character to include in the returned substring
          </li>
          <li>
            <code>end</code> - <BadgeOptional /> the index of the first character to exclude from the returned substring
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
