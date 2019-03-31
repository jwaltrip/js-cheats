import React from "react";
import SyntaxHighlight from "../../SyntaxHighlight/SyntaxHighlight";
import ParamDesc from "../../ParamDesc/ParamDesc";

const ArrSlice = () => {
  return (
    <div>
      <h1>.slice()</h1>
      <hr />
    
      <div className="sublabel">Description:</div>
      <p className="subtext">
        Returns the selected elements in an array from a specified <code>start</code> and <code>end</code> indexes (not including the <code>end</code> index) as a new array object
      </p>
      <ul>
        <li>The original array is not mutated</li>
      </ul>
    
      <div className="sublabel">Syntax:</div>
      <SyntaxHighlight syntax="const slicedArray = array.slice(start, end)" />
    
      <h5>Parameter Description:</h5>
      <ParamDesc
        isRequired={false}
        paramName="start"
        paramNameWidth={70}
      >
        zero-based index at which to begin extraction. Default index value is <code>0</code>
      </ParamDesc>
      <ParamDesc
        isRequired={false}
        paramName="end"
        paramNameWidth={70}
      >
        the index at which to end the extraction. The <code>end</code> index value is not included. Default index value is <code>array.length</code>
      </ParamDesc>
    
      <div className="sublabel">Example:</div>
      <div className="example">
        <iframe
          title="arr_slice"
          height="400px"
          width="100%"
          src="https://repl.it/@William_Cruz/PeachpuffAgonizingNetbsd?lite=true"
          scrolling="no"
          frameBorder="no"
          allowFullScreen={true}
          sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
        />
      </div>
    </div>
  );
};

export default ArrSlice;
