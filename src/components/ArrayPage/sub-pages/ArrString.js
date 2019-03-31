import React from "react";
import SyntaxHighlight from "../../SyntaxHighlight/SyntaxHighlight";

const ArrString = () => {
  return (
    <div>
      <h1>.toString()</h1>
      <hr />
    
      <div className="sublabel">Description:</div>
      <p className="subtext">
        Converts an array into a string and returns the result
      </p>
      <ul>
        <li>The returned string will seperate the elements in the array with commas</li>
      </ul>
    
      <div className="sublabel">Syntax:</div>
      <SyntaxHighlight syntax="const arrayString = array.toString()" />
    
      <div className="sublabel">Example:</div>
      <div className="example">
        <iframe
          title="arr_toString"
          height="400px"
          width="100%"
          src="https://repl.it/@William_Cruz/GlaringSelfassuredHypotenuse?lite=true"
          scrolling="no"
          frameBorder="no"
          allowFullScreen={true}
          sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
        />
      </div>
    </div>
  );
};

export default ArrString;
