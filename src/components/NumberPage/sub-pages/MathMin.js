import React from "react";
import SyntaxHighlight from "../../SyntaxHighlight/SyntaxHighlight";
import ParamDesc from "../../ParamDesc/ParamDesc";

// class changed into function to speed up optimization

const MathMin = () => {
  return (
    <div>
      <h1>Math.min()</h1>
      <hr />
    
      <div className="sublabel">Description:</div>
      <p className="subtext">
        A Math function that returns the base to the exponent power.
      </p>
    
      <div className="sublabel">Syntax:</div>
      <SyntaxHighlight syntax="Math.pow(base, exponent)" />
    
      <h5>Parameter Description:</h5>
      <ParamDesc
        isRequired={true}
        paramName="base"
        paramNameWidth={70}
        paramDesc="the base number"
      />
      <ParamDesc
        isRequired={true}
        paramName="exponent"
        paramNameWidth={70}
        paramDesc="the exponent used to raise the base"
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

export default MathMin;