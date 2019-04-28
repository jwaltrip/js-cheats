import React from "react";
import SyntaxHighlight from "../../SyntaxHighlight/SyntaxHighlight";
import ParamDesc from "../../ParamDesc/ParamDesc";

// class changed into function to speed up optimization

const MathAbs = () => {
  return (
    <div>
      <h1>Math.abs()</h1>
      <hr />
    
      <div className="sublabel">Description:</div>
      <p className="subtext">
        Math function that returns the absolute value of a positive or negative number.
      </p>
      <ul>
        <li>
          Passing an empty object <code>{}</code>, an array with more than one number <code>[3, 4]</code>, a non-numeric string <code>'hello'</code>, <code>undefined</code> or an empty variable returns <code>NaN</code>.
        </li>
        <li>Passing <code>null</code>, an empty string <code>""</code>, or an empty array <code>[]</code> returns 0.</li>
      </ul>
    
      <div className="sublabel">Syntax:</div>
      <SyntaxHighlight syntax="Math.abs(x)" />
    
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
          title="number-Math.abs"
          height="400px" 
          width="100%" 
          src="https://repl.it/@sarahcheatham/number-Mathabs?lite=true" 
          scrolling="no" 
          frameBorder="no" 
          allowFullScreen={true}
          sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
        />
      </div>
    </div>
  );
};

export default MathAbs;