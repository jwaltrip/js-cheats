import React from "react";
import SyntaxHighlight from "../../SyntaxHighlight/SyntaxHighlight";
import ParamDesc from "../../ParamDesc/ParamDesc";

// class changed into function to speed up optimization

const MathRound = () => {
  return (
    <div>
      <h1>Math.round()</h1>
      <hr />
    
      <div className="sublabel">Description:</div>
      <p className="subtext">
        A Math function that returns the value of a number rounded to the nearest integer.
      </p>
      <ul>
        <li>If the fractional portion is greater than 0.5, the arguement is rounded to the integer with the next higher absolute value.</li>
        <li>If the fractional portion is less than 0.5, the arguement is rounded to the integer with the lower absolute value.</li>
        <li>If the fractional portion is exactly 0.5, the arguement is rounded to the next integer in the direction of +&infin;.</li>
      </ul>
    
      <div className="sublabel">Syntax:</div>
      <SyntaxHighlight syntax="Math.round(x)" />
    
      <h5>Parameter Description:</h5>
      <ParamDesc
        isRequired={true}
        paramName="x"
        paramNameWidth={70}
        paramDesc="a number"
      />
    
      <div className="sublabel">Example:</div>
      <div className="example">
      <iframe 
            height="400px" 
            width="100%" 
            src="https://repl.it/@sarahcheatham/number-Mathround?lite=true" 
            scrolling="no" 
            frameBorder="no" 
            allowFullScreen={true} 
            sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
        />
      </div>
    </div>
  );
};

export default MathRound;