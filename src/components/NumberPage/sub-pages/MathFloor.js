import React from "react";
import SyntaxHighlight from "../../SyntaxHighlight/SyntaxHighlight";
import ParamDesc from "../../ParamDesc/ParamDesc";

// class changed into function to speed up optimization

const MathFloor = () => {
  return (
    <div>
      <h1>Math.floor()</h1>
      <hr />
    
      <div className="sublabel">Description:</div>
      <p className="subtext">
        A math function that returns the largest integer less than or equal to a given number (takes in an argument and rounds it down to the nearest integer)
      </p>
      <ul>
        <li><code>Math.floor(null)</code> returns integer 0 and does not give a <code>NaN</code> error.</li>
      </ul>
    
      <div className="sublabel">Syntax:</div>
      <SyntaxHighlight syntax="Math.floor(x)" />
    
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
            title="number-Math.floor"
            height="400px" 
            width="100%" 
            src="https://repl.it/@sarahcheatham/number-Mathfloor?lite=true" 
            scrolling="no" 
            frameBorder="no" 
            allowFullScreen={true} 
            sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
        />
      </div>
    </div>
  );
};

export default MathFloor;