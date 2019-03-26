import React from "react";
import SyntaxHighlight from "../../SyntaxHighlight/SyntaxHighlight";
import ParamDesc from "../../ParamDesc/ParamDesc";

const StrEndsWith = () => {
  return (
    <div>
      <h1>.endsWith()</h1>
      <hr />
      
      <div className="sublabel">Description:</div>
      <p className="subtext">
        Determines whether a string ends with the characters of a specified string
      </p>
      <ul>
        <li>
          Method returns <code>true</code> if the string ends with the characters, and <code>false</code> if not
        </li>
        <li>Case sensitive</li>
      </ul>
    
      <div className="sublabel">Syntax:</div>
      <SyntaxHighlight syntax="string.endsWith(searchValue, length)" />
    
      <h5>Parameter Description:</h5>
      <ParamDesc
        isRequired={true}
        paramName="searchValue"
        paramNameWidth={115}
        paramDesc="value to search for in string"
      />
      <ParamDesc
        isRequired={false}
        paramName="length"
        paramNameWidth={115}
        paramDesc="the default is the length of the string"
      />
    
      <div className="sublabel">Example:</div>
      <div className="example">
        <iframe
          title="string-endsWith"
          height="400px"
          width="100%"
          src="https://repl.it/@Zgutier5/endsWtih?lite=true"
          scrolling="no"
          frameBorder="no"
          allowFullScreen={true}
          sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
        />
      </div>
    </div>
  );
};

export default StrEndsWith;
