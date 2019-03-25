import React from "react";
import SyntaxHighlight from "../../SyntaxHighlight/SyntaxHighlight";
import ParamDesc from "../../ParamDesc/ParamDesc";

const ArrMap = () => {
  return (
    <div>
      <h1>.map()</h1>
      <hr />
    
      <div className="sublabel">Description:</div>
      <p className="subtext">
        The <code>map()</code> method creates a new array with the results of calling a{" "}
        provided function on every element in the original array
      </p>
    
      <div className="sublabel">Syntax:</div>
      <SyntaxHighlight syntax="const new_array = oldArray.map(function callback(currentValue, index, array))" />
    
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
        the array that <code>map()</code> was called upon
      </ParamDesc>
    
      <div className="sublabel">Example:</div>
      <div className="example">
        <iframe
          title="arr_map"
          height="400px"
          width="100%"
          src="https://repl.it/@William_Cruz/QuaintEnormousTriangle?lite=true"
          scrolling="no"
          frameBorder="no"
          allowFullScreen={true}
          sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
        />
      </div>
    </div>
  );
};

export default ArrMap;
