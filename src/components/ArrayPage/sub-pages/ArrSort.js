import React from "react";
import SyntaxHighlight from "../../SyntaxHighlight/SyntaxHighlight";

const ArrSort = () => {
  return (
    <div>
      <h1>.sort()</h1>
      <hr />
    
      <div className="sublabel">Description:</div>
      <p className="subtext">Sorts the items of an array in alphabetical order (not numerical order)</p>
      <ul>
        <li>By default, the sort method sorts the values as <code>strings</code> in <code>alphabetical</code> and <code>ascending</code> order</li>
        <li>This method mutates the original array</li>
      </ul>
    
      <div className="sublabel">Syntax:</div>
      <SyntaxHighlight syntax="const sortedArray = array.sort()" />
    
      <div className="sublabel">Example:</div>
      <div className="example">
        <iframe
          title="arr_sort"
          height="400px"
          width="100%"
          src="https://repl.it/@William_Cruz/UtterWhoppingResources?lite=true"
          scrolling="no"
          frameBorder="no"
          allowFullScreen={true}
          sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
        />
      </div>
    </div>
  );
};

export default ArrSort;
