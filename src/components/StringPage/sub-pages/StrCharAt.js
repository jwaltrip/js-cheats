import React from "react";
import "./sub-pages.css";
import BadgeRequired from "../../BadgeRequired/BadgeRequired";
import SyntaxHighlight from "../../SyntaxHighlight/SyntaxHighlight";

class StrCharAt extends React.Component {
  render() {
    return (
      <div>
        <h1>.charAt()</h1>
        <hr />
        <div className="sublabel">Description:</div>
        <p className="subtext">
          Returns the characters at the specified index in a string
        </p>
        <ul>
          <li>Index of the first character is <code>0</code></li>
          <li>Index of the last character is <code>string.length - 1</code></li>
        </ul>
        <div className="sublabel">Syntax:</div>
        <SyntaxHighlight syntax="string.charAt(index)" />
        <ul>
          <li>
            <code>index</code> - <BadgeRequired /> the index of the character to be returned
          </li>
        </ul>
        <div className="sublabel">Example:</div>
        <div className="example">
          <iframe
            title="string-charAt"
            height="400px"
            width="100%"
            src="https://repl.it/@Zgutier5/charAt?lite=true"
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

export default StrCharAt;
