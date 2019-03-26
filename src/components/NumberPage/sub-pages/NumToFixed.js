import React from "react";
import SyntaxHighlight from "../../SyntaxHighlight/SyntaxHighlight";
import ParamDesc from "../../ParamDesc/ParamDesc";

const NumToFixed = () => {
  return (
    <div>
      <h1>.toFixed()</h1>
      <hr />
    
      <div className="sublabel">Description:</div>
      <p className="subtext">
        The method returns a <code>string</code>, with the number written with a specified number of decimals
      </p>
    
      <div className="sublabel">Syntax:</div>
      <SyntaxHighlight syntax="Number.toFixed(digits)" />
    
      <h5>Parameter Description:</h5>
      {/* To be able to pass in JSX elements to the paramDesc, you must pass the value like below
          in this instance it's the <code> tag  */}
      <ParamDesc
        isRequired={false}
        paramName="digits"
        paramNameWidth={70}
      >
        the number of digits to appear after the decimal point. This may be a value between <code>0</code> and <code>20</code>. Default value is <code>0</code>
      </ParamDesc>
    
      <div className="sublabel">Example:</div>
      <div className="example">
        <iframe
          title="num-toFixed"
          height="400px"
          width="100%"
          src="https://repl.it/@Zgutier5/toFixed?lite=true"
          scrolling="no"
          frameBorder="no"
          allowFullScreen={true}
          sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
        />
      </div>
    </div>
  );
};

export default NumToFixed;
