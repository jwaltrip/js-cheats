import React from "react";
import SyntaxHighlight from "../../SyntaxHighlight/SyntaxHighlight";
import ParamDesc from "../../ParamDesc/ParamDesc";

const ArrForEach = () => {
  return (
    <div>
      <h1>.forEach()</h1>
      <hr />
    
      <div className="sublabel">Description:</div>
      <p className="subtext">
        The <code>forEach()</code> method executes a provided function once for each array element
      </p>
      <ul>
        <li>This method always returns <code>undefined</code></li>
      </ul>
    
      <div className="sublabel">Syntax:</div>
      <SyntaxHighlight syntax="array.forEach(function callback(currentValue, index, array))" />
    
      <h5>Parameter Description:</h5>
      <ParamDesc
        isRequired={true}
        paramName="currentValue"
        paramNameWidth={120}
        paramDesc="the current element being processed in the array"
      />
      <ParamDesc
        isRequired={false}
        paramName="index"
        paramNameWidth={120}
        paramDesc="the current index of the element being processed in the array"
      />
      <ParamDesc
        isRequired={false}
        paramName="array"
        paramNameWidth={120}
      >
        the array that <code>forEach()</code> was called upon
      </ParamDesc>
    
      <div className="sublabel">Example:</div>
      <div className="example">
        <iframe
          title="arr_forEach"
          height="400px"
          width="100%"
          src="https://repl.it/@William_Cruz/GrayAbleJavadoc?lite=true"
          scrolling="no"
          frameBorder="no"
          allowFullScreen={true}
          sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
        />
      </div>
    </div>
  );
};

export default ArrForEach;
