import React from "react";
import SyntaxHighlight from "../../SyntaxHighlight/SyntaxHighlight";
import ParamDesc from "../../ParamDesc/ParamDesc";

const ArrIndexOf = () => {
  return (
    <div>
      <h1>.indexOf()</h1>
      <hr />
    
      <div className="sublabel">Description:</div>
      <p className="subtext">
        Searches the array for the specified item, and returns it's index in the array
      </p>
      <ul>
        <li>Returns <code>-1</code> if item is not found</li>
        <li>
          If the item is present more than once, it returns the position of the first occurance
        </li>
      </ul>
    
      <div className="sublabel">Syntax:</div>
      <SyntaxHighlight syntax="array.indexOf(searchValue, start)" />
    
      <h5>Parameter Description:</h5>
      <ParamDesc
        isRequired={true}
        paramName="searchValue"
        paramNameWidth={115}
        paramDesc="the value to search for in the array"
      />
      <ParamDesc
        isRequired={false}
        paramName="start"
        paramNameWidth={115}
        paramDesc="the index to begin the search of the array"
      />
    
      <div className="sublabel">Example:</div>
      <div className="example">
        <iframe
          title="arr_indexOf"
          height="400px"
          width="100%"
          src="https://repl.it/@William_Cruz/TurbulentVacantEllipses?lite=true"
          scrolling="no"
          frameBorder="no"
          allowFullScreen={true}
          sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
        />
      </div>
    </div>
  );
};

export default ArrIndexOf;
