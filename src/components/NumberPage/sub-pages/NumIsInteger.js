import React from "react";
import SyntaxHighlight from "../../SyntaxHighlight/SyntaxHighlight";
import ParamDesc from "../../ParamDesc/ParamDesc";

const NumIsInteger = () => {
  return (
    <div>
      <h1>.isInteger()</h1>
      <hr />
    
      <div className="sublabel">Description:</div>
      <p className="subtext">
        The method determines whether a value an integer
      </p>
      <ul>
        <li>
          The method also returns <code>true</code> if the value is of the type <code>Number</code> <i>and</i> an <code>integer</code> (a number without decimals)
        </li>
        <li>Otherwise it returns <code>false</code></li>
      </ul>
    
      <div className="sublabel">Syntax:</div>
      <SyntaxHighlight syntax="Number.isInteger(number)" />
    
      <h5>Parameter Description:</h5>
      <ParamDesc
        isRequired={true}
        paramName="number"
        paramNameWidth={70}
        paramDesc="value to check if it's integer or not"
      />
    
      <div className="sublabel">Example:</div>
      <div className="example">
        <iframe
          title="number-isInteger"
          height="400px"
          width="100%"
          src="https://repl.it/@Zgutier5/isInteger?lite=true"
          scrolling="no"
          frameBorder="no"
          allowFullScreen={true}
          sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
        />
      </div>
    </div>
  );
};

export default NumIsInteger;
