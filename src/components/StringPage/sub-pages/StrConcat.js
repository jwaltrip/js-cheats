import React from "react";
import SyntaxHighlight from "../../SyntaxHighlight/SyntaxHighlight";

const StrConcat = () => {
  return (
    <div>
      <h1>.concat()</h1>
      <hr />
      
      <div className="sublabel">Description:</div>
      <p className="subtext">
        This function joins two or more strings together.
      </p>
      <ul>
        <li>
          This method does not change the existings strings, but returns a
          new string containing the text of the joined strings.
        </li>
      </ul>
      
      <div className="sublabel">Syntax:</div>
      <SyntaxHighlight syntax="string.concat(string1, string2, ...stringX)" />
      
      <div className="sublabel">Example:</div>
      <div className="example">
        <iframe
          title="string-concat"
          height="400px"
          width="100%"
          src="https://repl.it/@Zgutier5/concat?lite=true"
          scrolling="no"
          frameBorder="no"
          allowFullScreen={true}
          sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
        />
      </div>
    </div>
  );
};

export default StrConcat;
