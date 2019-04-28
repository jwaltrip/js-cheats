import React from "react";
import SyntaxHighlight from "../../SyntaxHighlight/SyntaxHighlight";
import ParamDesc from "../../ParamDesc/ParamDesc";

// class changed into function to speed up optimization

const MathMax = () => {
  return (
    <div>
      <h1>Math.max()</h1>
      <hr />
    
      <div className="sublabel">Description:</div>
      <p className="subtext">
        A Math function that returns the largest of zero or more numbers.
      </p>
      <ul>
        <li>If at least one of the arguements cannot be converted to a number <code>NaN</code> is returned.</li>
        <li>If no arguements are given the result is -&infin;</li>
      </ul>
    
      <div className="sublabel">Syntax:</div>
      <SyntaxHighlight syntax="Math.max([value1[, value2[, ...]]])" />
    
      <h5>Parameter Description:</h5>
      <ParamDesc
        isRequired={true}
        paramName="value1"
        paramNameWidth={70}
        paramDesc="number"
      />
      <ParamDesc
        isRequired={true}
        paramName="value2"
        paramNameWidth={70}
        paramDesc="number"
      />
    
      <div className="sublabel">Example:</div>
      <div className="example">
      <iframe 
            height="400px" 
            width="100%" 
            src="https://repl.it/@sarahcheatham/number-Mathpow?lite=true" 
            scrolling="no" 
            frameBorder="no" 
            allowFullScreen={true} 
            sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
        />
      </div>
    </div>
  );
};

export default MathMax;