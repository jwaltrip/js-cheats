import React from "react";
import ParamDesc from "../../ParamDesc/ParamDesc";
import SyntaxHighlight from "../../SyntaxHighlight/SyntaxHighlight";

const StrMatch = () => {
  return (
    <div>
      <h1>.match()</h1>
      <hr />
      
      <div className="sublabel">Description:</div>
      <p className="subtext">
        The method searches a string for a match against a regular expression, and returns the matches as an array object
      </p>
      
      <div className="sublabel">Syntax:</div>
      <SyntaxHighlight syntax="string.match(regexp)" />
    
      <h5>Parameter Description:</h5>
      <ParamDesc
        isRequired={true}
        paramName="regexp"
        paramNameWidth={75}
        paramDesc="regex expression to find match in string"
      />
    
      <div className="sublabel">Example:</div>
      <div className="example">
        <iframe
          title="string-match"
          height="400px"
          width="100%"
          src="https://repl.it/@Zgutier5/match?lite=true"
          scrolling="no"
          frameBorder="no"
          allowFullScreen={true}
          sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
        />
      </div>
    </div>
  );
};

export default StrMatch;
