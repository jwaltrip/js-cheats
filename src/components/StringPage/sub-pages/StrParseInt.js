import React from "react";
import ParamDesc from "../../ParamDesc/ParamDesc";
import SyntaxHighlight from "../../SyntaxHighlight/SyntaxHighlight";

const StrParseInt = () => {
  return (
    <div>
      <h1>.parseInt()</h1>
      <hr />
      
      <div className="sublabel">Description:</div>
      <p className="subtext">
        The method parses a string containing a number value and returns an integer
      </p>
      <ul>
        <li>Only the first number in the string is returned</li>
        <li>
          If the first character cannot be converted to a number, <code>parseInt()</code> returns <code>NaN</code>
        </li>
      </ul>
      
      <div className="sublabel">Syntax:</div>
      <SyntaxHighlight syntax="string.parseInt(string, radix)" />
    
      <h5>Parameter Description:</h5>
      <ParamDesc
        isRequired={true}
        paramName="string"
        paramNameWidth={70}
        paramDesc="string containing a number to be converted to number type"
      />
      {/* To be able to pass in JSX elements to the paramDesc, you must pass the value like below
          in this instance it's the <code> tag  */}
      <ParamDesc
        isRequired={false}
        paramName="radix"
        paramNameWidth={70}
      >
        default value is base <code>10</code>
      </ParamDesc>
    
      <div className="sublabel">Example:</div>
      <div className="example">
        <iframe
          title="string-parseInt"
          height="400px"
          width="100%"
          src="https://repl.it/@Zgutier5/parseInt?lite=true"
          scrolling="no"
          frameBorder="no"
          allowFullScreen={true}
          sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
        />
      </div>
    </div>
  );
};

export default StrParseInt;
