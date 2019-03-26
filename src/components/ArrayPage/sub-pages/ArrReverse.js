import React from "react";
import SyntaxHighlight from "../../SyntaxHighlight/SyntaxHighlight";

const ArrReverse = () => {
  return (
    <div>
      <h1>.reverse()</h1>
      <hr />
    
      <div className="sublabel">Description:</div>
      <p className="subtext">Reverses order of items in array</p>
      <ul>
        <li>The first item in the array becomes the last, and the last item becomes the first</li>
        <li>This method mutates the original array</li>
      </ul>
    
      <div className="sublabel">Syntax:</div>
      <SyntaxHighlight syntax="const reversedArray = array.reverse()" />
    
      <div className="sublabel">Example:</div>
      <div className="example">
        <iframe
          title="arr_reverse"
          height="400px"
          width="100%"
          src="https://repl.it/@William_Cruz/FatherlyFondFlash?lite=true"
          scrolling="no"
          frameBorder="no"
          allowFullScreen={true}
          sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
        />
      </div>
    </div>
  );
};

export default ArrReverse;
