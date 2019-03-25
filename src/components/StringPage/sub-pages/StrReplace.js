import React from "react";
import ParamDesc from "../../ParamDesc/ParamDesc";
import SyntaxHighlight from "../../SyntaxHighlight/SyntaxHighlight";

const StrReplace = () => {
  return (
    <div>
      <h1>.replace()</h1>
      <hr />
      
      <div className="sublabel">Description:</div>
      <p className="subtext">
        The method searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced
      </p>
      <ul>
        <li>Only the first instance of the value will be replaced</li>
      </ul>
      
      <div className="sublabel">Syntax:</div>
      <SyntaxHighlight syntax="string.replace(searchValue, newValue)" />
    
      <h5>Parameter Description:</h5>
      <ParamDesc
        isRequired={true}
        paramName="searchValue"
        paramNameWidth={115}
        paramDesc="value to search for in string to be replaced"
      />
      <ParamDesc
        isRequired={true}
        paramName="newValue"
        paramNameWidth={115}
        paramDesc="the replacement value"
      />
    
      <div className="sublabel">Example:</div>
      <div className="example">
        <iframe
          title="string-replace"
          height="400px"
          width="100%"
          src="https://repl.it/@Zgutier5/replace?lite=true"
          scrolling="no"
          frameBorder="no"
          allowFullScreen={true}
          sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
        />
      </div>
    </div>
  );
};

export default StrReplace;
