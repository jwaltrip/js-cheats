import React from "react";
import SyntaxHighlight from "../../SyntaxHighlight/SyntaxHighlight";
import ParamDesc from "../../ParamDesc/ParamDesc";

const NumToExponential = () => {
  return (
    <div>
      <h1>.toExponential()</h1>
      <hr />
    
      <div className="sublabel">Description:</div>
      <p className="subtext">
        The method returns a <code>string</code>, with a number rounded and written using exponential notation
      </p>
    
      <div className="sublabel">Syntax:</div>
      <SyntaxHighlight syntax="number.toExponential(fractionDigits)" />
    
      <h5>Parameter Description:</h5>
      <ParamDesc
        isRequired={false}
        paramName="fractionDigits"
        paramNameWidth={150}
        paramDesc="An integer specifying the number of digits after the decimal point. Defaults to as many digits as necessary to specify the number"
      />
    
      <div className="sublabel">Example:</div>
      <div className="example">
        <iframe
          title="num-toExponential"
          height="400px"
          width="100%"
          src="https://repl.it/@Zgutier5/toExpoenentail?lite=true"
          scrolling="no"
          frameBorder="no"
          allowFullScreen={true}
          sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
        />
      </div>
    </div>
  );
};

export default NumToExponential;
