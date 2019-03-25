import React from "react";
import SyntaxHighlight from "../../SyntaxHighlight/SyntaxHighlight";
import ParamDesc from "../../ParamDesc/ParamDesc";

const StrIndexOf = () => {
  return (
    <div>
      <h1>.indexOf()</h1>
      <hr />
      
      <div className="sublabel">Description:</div>
      <p className="subtext">
        The method returns the position of the first occurance of specified value in a string
      </p>
      <ul>
        <li>
          Method returns <code>-1</code> if the value to search for never occurs
        </li>
        <li>Case senistive</li>
      </ul>
      
      <div className="sublabel">Syntax:</div>
      <SyntaxHighlight syntax="string.indexOf(searchValue, start)" />
    
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
        paramDesc="default is the beginning of the string"
      />
    
      <div className="sublabel">Example:</div>
      <div className="example">
        <iframe
          title="string-indexOf"
          height="400px"
          width="100%"
          src="https://repl.it/@Zgutier5/indexOf?lite=true"
          scrolling="no"
          frameBorder="no"
          allowFullScreen={true}
          sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
        />
      </div>
    </div>
  );
};

export default StrIndexOf;
