import React from "react";
import SyntaxHighlight from "../../SyntaxHighlight/SyntaxHighlight";

const ArrPop = () => {
  return (
    <div>
      <h1>.pop()</h1>
      <hr />
    
      <div className="sublabel">Description:</div>
      <p className="subtext">Removes the last element of an array and returns the item that was removed</p>
      <ul>
        <li>This method changes the <code>length</code> of the array</li>
        <li>Returns the removed element</li>
        <li>Returns <code>undefined</code> if array is empty</li>
      </ul>
    
      <div className="sublabel">Syntax:</div>
      <SyntaxHighlight syntax="const lastArrayValue = array.pop()" />
    
      <div className="sublabel">Example:</div>
      <div className="example">
        <iframe
          title="arr_pop"
          height="400px"
          width="100%"
          src="https://repl.it/@William_Cruz/LastingDarkgrayMacro?lite=true"
          scrolling="no"
          frameBorder="no"
          allowFullScreen={true}
          sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
        />
      </div>
    </div>
  );
};

export default ArrPop;
