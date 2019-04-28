import React from "react";
import SyntaxHighlight from "../../SyntaxHighlight/SyntaxHighlight";
import ParamDesc from "../../ParamDesc/ParamDesc";

// class changed into function to speed up optimization

const MathCeil = () => {
  return (
    <div>
      <h1>Math.ceil()</h1>
      <hr />
    
      <div className="sublabel">Description:</div>
      <p className="subtext">
        A Math function that return the smallest integer greater than or equal to a given number. (takes in an argument and rounds it up to the nearest integer)
      </p>
      <ul>
        <li><code>Math.ceil(null)</code> returns integer 0 and does not give a <code>NaN</code> error.</li>
      </ul>
    
      <div className="sublabel">Syntax:</div>
      <SyntaxHighlight syntax="Math.ceil(x)" />
    
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
        title="number-Math.ceil"
        height="400px" 
        width="100%" 
        src="https://repl.it/@sarahcheatham/number-Mathceil?lite=true" 
        scrolling="no" 
        frameBorder="no" 
        allowFullScreen={true}
        sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
      />
      </div>
    </div>
  );
};

export default MathCeil;