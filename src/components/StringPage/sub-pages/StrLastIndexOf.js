import React from "react";
import ParamDesc from "../../ParamDesc/ParamDesc";
import SyntaxHighlight from "../../SyntaxHighlight/SyntaxHighlight";

const StrLastIndexOf = () => {
  return (
    <div>
      <h1>.lastIndexOf()</h1>
      <hr />
      
      <div className="sublabel">Description:</div>
      <p className="subtext">
        The method returns the position of the last occurance of specified value in a string
      </p>
      <ul>
        <li>
          String is searched from end to beginning, and returns <code>index</code> if found <code>(0 = first index/character)</code>
        </li>
        <li>
          Method returns <code>-1</code> if the value to search for is not found
        </li>
        <li>Case sensitive</li>
      </ul>
      
      <div className="sublabel">Syntax:</div>
      <SyntaxHighlight syntax="string.lastIndexOf(searchValue, start)" />
    
      <h5>Parameter Description:</h5>
      <ParamDesc
        isRequired={true}
        paramName="searchValue"
        paramNameWidth={115}
        paramDesc="value to search for in string"
      />
      <ParamDesc
        isRequired={false}
        paramName="start"
        paramNameWidth={115}
        paramDesc="the default is the length of the string"
      />
    
      <div className="sublabel">Example:</div>
      <div className="example">
        <iframe
          title="string-lastIndexOf"
          height="400px"
          width="100%"
          src="https://repl.it/@Zgutier5/lastIndexOf?lite=true"
          scrolling="no"
          frameBorder="no"
          allowFullScreen={true}
          sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
        />
      </div>
    </div>
  );
};

export default StrLastIndexOf;
