import React from "react";
import SyntaxHighlight from "../../SyntaxHighlight/SyntaxHighlight";

const StrValue = () => {
  return (
    <div>
      <h1>valueOf()</h1>
      <hr />
      
      <div className="sublabel">Description:</div>
      <p className="subtext">
        This method returns the primitive value of a string object
      </p>
      
      <div className="sublabel">Syntax:</div>
      <SyntaxHighlight syntax="string.valueOf()" />
      
      <div className="sublabel">Example:</div>
      <div className="example">
        <iframe
          title="string-valueof"
          height="400px"
          width="100%"
          src="https://repl.it/@Zgutier5/valueof?lite=true"
          scrolling="no"
          frameBorder="no"
          allowFullScreen={true}
          sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
        />
      </div>
    </div>
  );
};

export default StrValue;
