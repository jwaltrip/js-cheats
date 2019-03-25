import React from "react";
import SyntaxHighlight from "../../SyntaxHighlight/SyntaxHighlight";
import ParamDesc from "../../ParamDesc/ParamDesc";

const NumToString = () => {
  return (
    <div>
      <h1>.toString()</h1>
      <hr />
    
      <div className="sublabel">Description:</div>
      <p className="subtext">
        The method returns a <code>number</code> as a <code>string</code>
      </p>
    
      <div className="sublabel">Syntax:</div>
      <SyntaxHighlight syntax="Number.toString(radix)" />
    
      <h5>Parameter Description:</h5>
      <ParamDesc
        isRequired={false}
        paramName="radix"
        paramNameWidth={60}
      >
        an <code>integer</code> in the range <code>2</code> through <code>36</code> specifying the base to use for representing numeric values. Default value is base <code>10</code>
      </ParamDesc>
    
      <div className="sublabel">Example:</div>
      <div className="example">
        <iframe
          title="num-toString"
          height="400px"
          width="100%"
          src="https://repl.it/@Zgutier5/toString?lite=true"
          scrolling="no"
          frameBorder="no"
          allowFullScreen={true}
          sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
        />
      </div>
    </div>
  );
};

export default NumToString;
