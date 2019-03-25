import React from "react";
import SyntaxHighlight from "../../SyntaxHighlight/SyntaxHighlight";
import ParamDesc from "../../ParamDesc/ParamDesc";

const NumToPrecision = () => {
  return (
    <div>
      <h1>.toPrecision()</h1>
      <hr />
    
      <div className="sublabel">Description:</div>
      <p className="subtext">
        The method returns a <code>string</code>, with a number written with a specified length
      </p>
    
      <div className="sublabel">Syntax:</div>
      <SyntaxHighlight syntax="Number.toPrecision(precision)" />
    
      <h5>Parameter Description:</h5>
      <ParamDesc
        isRequired={false}
        paramName="precision"
        paramNameWidth={90}
        paramDesc="an integer specifying the number of significant digits"
      />
    
      <div className="sublabel">Example:</div>
      <div className="example">
        <iframe
          title="num-toPrecision"
          height="400px"
          width="100%"
          src="https://repl.it/@Zgutier5/toPrecision?lite=true"
          scrolling="no"
          frameBorder="no"
          allowFullScreen={true}
          sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
        />
      </div>
    </div>
  );
};

export default NumToPrecision;
