import React from "react";
import SyntaxHighlight from "../../SyntaxHighlight/SyntaxHighlight";
import ParamDesc from "../../ParamDesc/ParamDesc";

const ArrFilter = () => {
  return (
    <div>
      <h1>.filter()</h1>
      <hr />
    
      <div className="sublabel"> Description: </div>
      <p className="subtext">
        The <code>filter()</code> method creates a new array with all elements that pass the test implemented by the provided function
      </p>
    
      <div className="sublabel">Syntax:</div>
      <SyntaxHighlight syntax="const newArray = oldArr.filter(function callback(currentValue, index, array))" />
    
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
        the array that <code>filter()</code> was called upon
      </ParamDesc>
    
      <div className="sublabel">Example:</div>
      <div className="example">
        <iframe
          title="arr_filter"
          height="400px"
          width="100%"
          src="https://repl.it/@William_Cruz/RingedPinkGlueware?lite=true"
          scrolling="no"
          frameBorder="no"
          allowFullScreen={true}
          sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
        />
      </div>
    </div>
  );
};

export default ArrFilter;
