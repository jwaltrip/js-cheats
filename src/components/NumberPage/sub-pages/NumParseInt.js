import React from "react";
import SyntaxHighlight from "../../SyntaxHighlight/SyntaxHighlight";
import ParamDesc from "../../ParamDesc/ParamDesc";

const NumParseInt = () => {
  return (
    <div>
      <h1>.parseInt()</h1>
      <hr />
    
      <div className="sublabel">Description:</div>
      <p className="subtext">
        The method parses a <code>string</code> and returns a <code>integer</code> (whole number)
      </p>
      <ul>
        <li>
          If the first character cannot be converted to a number, <code>parseInt()</code> returns a <code>NaN</code>
        </li>
        <li>Only the first number is returned</li>
        <li>Spaces are allowed</li>
      </ul>
    
      <div className="sublabel">Syntax:</div>
      <SyntaxHighlight syntax="Number.parseInt(string, [ radix])" />
    
      <h5>Parameter Description:</h5>
      <ParamDesc
        isRequired={true}
        paramName="number"
        paramNameWidth={70}
        paramDesc="value to convert to an integer"
      />
      <ParamDesc
        isRequired={false}
        paramName="radix"
        paramNameWidth={70}
      >
        an <code>integer</code> in the range <code>2</code> through <code>36</code> specifying the base to use for representing numeric values. Default value is base <code>10</code>
      </ParamDesc>
    
      <div className="sublabel">Example:</div>
      <div className="example">
        <iframe
          title="num-parseInt"
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

export default NumParseInt;
