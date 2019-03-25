import React from "react";
import SyntaxHighlight from "../../SyntaxHighlight/SyntaxHighlight";

const ArrLength = () => {
  return (
    <div>
      <h1>.length</h1>
      <hr />
    
      <div className="sublabel">Description:</div>
      <p className="subtext">Returns the length of an array</p>
    
      <div className="sublabel">Syntax:</div>
      <SyntaxHighlight syntax="array.length" />
    
      <div className="sublabel">Example:</div>
      <div className="example">
        <iframe
          title="arr_length"
          height="400px"
          width="100%"
          src="https://repl.it/@William_Cruz/KindForkedBackslash?lite=true"
          scrolling="no"
          frameBorder="no"
          allowFullScreen={true}
          sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
        />
      </div>
    </div>
  );
};

export default ArrLength;
