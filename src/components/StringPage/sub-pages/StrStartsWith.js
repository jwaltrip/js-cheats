import React from "react";
import BadgeRequired from "../../BadgeRequired/BadgeRequired";
import BadgeOptional from "../../BadgeOptional/BadgeOptional";
import SyntaxHighlight from "../../SyntaxHighlight/SyntaxHighlight";
import "./sub-pages.css";

class StrStartsWith extends React.Component {
  render() {
    return (
      <div>
        <h1>.startsWith()</h1>
        <hr />
        <div className="sublabel">Description:</div>
        <p className="subtext">
          Determines whether a string begins with the characters of a specified string
        </p>
        <ul>
          <li>
            Method returns <code>true</code> if the string begins with the characters, and <code>false</code> if not
          </li>
          <li>Case senistive</li>
        </ul>
        <div className="sublabel">Syntax:</div>
        <SyntaxHighlight syntax="string.startsWith(searchValue, start)" />
        <ul>
          <li>
            <code>searchValue</code> - <BadgeRequired /> value to search for in string
          </li>
          <li><code>start</code> - <BadgeOptional /> the default index value is <code>0</code></li>
        </ul>
        <div className="sublabel">Example:</div>
        <div className="example">
          <iframe
            title="string-startsWith"
            height="400px"
            width="100%"
            src="https://repl.it/@Zgutier5/startsWith?lite=true"
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

export default StrStartsWith;
