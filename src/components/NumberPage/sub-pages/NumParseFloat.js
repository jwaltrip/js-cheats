import React from "react";
import SyntaxHighlight from "../../SyntaxHighlight/SyntaxHighlight";
import ParamDesc from "../../ParamDesc/ParamDesc";

const NumParseFloat = () => {
  return (
    <div>
      <h1>parseFloat()</h1>
      <hr />
    
      <div className="sublabel">Description:</div>
      <p className="subtext">
        The method parses a <code>string</code> and returns a <code>floating point number</code> (decimal number)
      </p>
      <ul>
        <li>Only the first number encountered is returned</li>
        <li>Spaces are allowed</li>
        <li>If string cannot be converted to a number, then returns <code>NaN</code></li>
      </ul>
    
      <div className="sublabel">Syntax:</div>
      <SyntaxHighlight syntax="Number.parseFloat(string)" />
    
      <h5>Parameter Description:</h5>
      <ParamDesc
        isRequired={true}
        paramName="string"
        paramNameWidth={70}
        paramDesc="value to be parsed into a floating point number"
      />
    
      <div className="sublabel">Example:</div>
      <div className="example">
        <iframe
          title="num-parseFloat"
          height="400px"
          width="100%"
          src="https://repl.it/@Zgutier5/parseFloat?lite=true"
          scrolling="no"
          frameBorder="no"
          allowFullScreen={true}
          sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
        />
      </div>
    </div>
  );
};

export default NumParseFloat;
