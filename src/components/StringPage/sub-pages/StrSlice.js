import React from "react";
import BadgeRequired from "../../BadgeRequired/BadgeRequired";
import BadgeOptional from "../../BadgeOptional/BadgeOptional";
import SyntaxHighlight from "../../SyntaxHighlight/SyntaxHighlight";
import "./sub-pages.css";

class StrSlice extends React.Component {
  render() {
    return (
      <div>
        <h1>.slice()</h1>
        <hr />
        <div className="sublabel">Description:</div>
        <p className="subtext">
          Extracts parts of a string and returns the extracted parts in a new string
        </p>
        <ul>
          <li>
            Use the <code>start</code> and <code>end</code> parameters to specify the part of the string you want to extract
          </li>
          <li><strong>Note:</strong> the <code>end</code> index is <strong><i>not</i></strong> included in resulting string</li>
          <li>Use a negative number to select from the end of the string.</li>
        </ul>
        <div className="sublabel">Syntax:</div>
        <SyntaxHighlight syntax="string.slice(start, end)" />
        <ul>
          <li>
            <code>start</code> - <BadgeRequired /> start index of where to begin string slice
          </li>
          <li>
            <code>end</code> - <BadgeOptional /> end index of where to end string slice. Default value is <code>string.length</code>
          </li>
        </ul>
        <div className="sublabel">Example:</div>
        <div className="example">
          <iframe
            title="string-slice"
            height="400px"
            width="100%"
            src="https://repl.it/@Zgutier5/slice?lite=true"
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

export default StrSlice;
