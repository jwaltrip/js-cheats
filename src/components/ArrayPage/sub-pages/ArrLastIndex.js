import React from "react";
import SyntaxHighlight from "../../SyntaxHighlight/SyntaxHighlight";
import ParamDesc from "../../ParamDesc/ParamDesc";

const ArrLastIndex = () => {
  return (
    <div>
      <h1>.lastIndexOf()</h1>
      <hr />
    
      <div className="sublabel">Description:</div>
      <p className="subtext">
        Searches the array for the specified item and returns its position
      </p>
      <ul>
        <li>The search will begin at the specified index or at the end if no start index is specified</li>
        <li>The search will end at the beginning of the array</li>
        <li>Returns the <code>last index</code> at which a given element can be found in the array</li>
        <li>Returns <code>-1</code> if the item is not found</li>
      </ul>
    
      <div className="sublabel">Syntax:</div>
      <SyntaxHighlight syntax="array.lastIndexOf(searchValue, start)" />
    
      <h5>Parameter Description:</h5>
      <ParamDesc
        isRequired={true}
        paramName="searchValue"
        paramNameWidth={120}
        paramDesc="the value to search for in the array"
      />
      <ParamDesc
        isRequired={false}
        paramName="start"
        paramNameWidth={120}
      >
        the index to begin the search in the array. Default value is <code>array.length - 1</code>
      </ParamDesc>
    
      <div className="sublabel">Example:</div>
      <div className="example">
        <iframe
          title="arr_lastIndexOf"
          height="400px"
          width="100%"
          src="https://repl.it/@William_Cruz/DodgerblueDeadlyRam?lite=true"
          scrolling="no"
          frameBorder="no"
          allowFullScreen={true}
          sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
        />
      </div>
    </div>
  );
};

export default ArrLastIndex;
