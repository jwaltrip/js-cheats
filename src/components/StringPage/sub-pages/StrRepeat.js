import React from "react";
import BadgeRequired from "../../BadgeRequired/BadgeRequired";
import SyntaxHighlight from "../../SyntaxHighlight/SyntaxHighlight";
import "./sub-pages.css";

class StrRepeat extends React.Component {
  render() {
    return (
      <div>
        <h1>.repeat()</h1>
        <hr />
        <div className="sublabel">Description:</div>
        <p className="subtext">
          The method returns a new string with a specified number of copies of the string it was called on
        </p>
        <div className="sublabel">Syntax:</div>
        <SyntaxHighlight syntax="string.repeat(count)" />
        <ul>
          <li>
            <code>count</code> - <BadgeRequired /> number of times the original string should be repeated in the new string
          </li>
        </ul>
        <div className="sublabel">Example:</div>
        <div className="example">
          <iframe
            title="string-repeat"
            height="400px"
            width="100%"
            src="https://repl.it/@Zgutier5/repeat?lite=true"
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

export default StrRepeat;
