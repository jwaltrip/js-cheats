import React from "react";
import SyntaxHighlight from "../../SyntaxHighlight/SyntaxHighlight";

const ArrShift = () => {
  return (
    <div>
      <h1>.shift()</h1>
      <hr />
    
      <div className="sublabel">Description:</div>
      <p className="subtext">Removes the first item of an array and returns item that was removed</p>
      <ul>
        <li>Changes the <code>length</code> of the array</li>
        <li>Return value of the shift method is the removed item (first item in array)</li>
        <li>Returns <code>undefined</code> if array is empty</li>
      </ul>
    
      <div className="sublabel">Syntax:</div>
      <SyntaxHighlight syntax="const firstArrayItem = array.shift()" />
    
      <div className="sublabel">Example:</div>
      <div className="example">
        <iframe
          title="arr_shift"
          height="400px"
          width="100%"
          src="https://repl.it/@William_Cruz/UnhappyKeyAbandonware?lite=true"
          scrolling="no"
          frameBorder="no"
          allowFullScreen={true}
          sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
        />
      </div>
    </div>
  );
};

export default ArrShift;
