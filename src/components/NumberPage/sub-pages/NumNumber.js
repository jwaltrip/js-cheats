import React from "react";
import SyntaxHighlight from "../../SyntaxHighlight/SyntaxHighlight";
import ParamDesc from "../../ParamDesc/ParamDesc";

const NumNumber = () => {
  return (
    <div>
      <h1>Number()</h1>
      <hr />
    
      <div className="sublabel">Description:</div>
      <p className="subtext">
        The method can be used to convert various JavaScript variables to <code>number</code> type
      </p>
      <ul>
        <li>The method can also convert a <code>date</code> to a <code>number</code></li>
      </ul>
    
      <div className="sublabel">Syntax:</div>
      <SyntaxHighlight syntax="Number(number)" />
    
      <h5>Parameter Description:</h5>
      <ParamDesc
        isRequired={true}
        paramName="number"
        paramNameWidth={70}
        paramDesc="value to check if it's integer or not"
      />
    
      <div className="sublabel">Example:</div>
      <div className="example">
        <iframe
          title="num-number"
          height="400px"
          width="100%"
          src="https://repl.it/@Zgutier5/Number?lite=true"
          scrolling="no"
          frameBorder="no"
          allowFullScreen={true}
          sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
        />
      </div>
    </div>
  );
};

export default NumNumber;
