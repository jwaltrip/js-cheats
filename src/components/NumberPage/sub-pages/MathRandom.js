import React from "react";
import SyntaxHighlight from "../../SyntaxHighlight/SyntaxHighlight";
import ParamDesc from "../../ParamDesc/ParamDesc";

// class changed into function to speed up optimization

const MathRandom = () => {
  return (
    <div>
      <h1>Math.random()</h1>
      <hr />
    
      <div className="sublabel">Description:</div>
      <p className="subtext">
        A Math function that returns a floating-point, pseudo-random numberin the range 0-1.

      </p>
      <ul>
        <li>This range is inclusive(includes) of 0 but not 1.</li>
        <li>Math.random() includes approximate uniform distribution over that range, which you can scale to your desired range.</li>
        <li>The random number can not be chosen or reset by the user.</li>
      </ul>
    
      <div className="sublabel">Syntax:</div>
      <SyntaxHighlight syntax="Math.random()" />
    
    
      <div className="sublabel">Example:</div>
      <div className="example">
        <iframe 
            height="400px" 
            width="100%" 
            src="https://repl.it/@sarahcheatham/number-Mathrandom?lite=true" 
            scrolling="no" 
            frameBorder="no"  
            allowfullscreen="true" 
            sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
        />
      </div>
    </div>
  );
};

export default MathRandom;