import React from "react";
import SyntaxHighlight from "../../SyntaxHighlight/SyntaxHighlight";
import ParamDesc from "../../ParamDesc/ParamDesc";

const ArrCopyWithin = () => {
  return (
    <div>
      <h1>.copyWithin()</h1>
      <hr />
    
      <div className="sublabel">Description:</div>
      <p className="subtext">
        Copies array elements within the array, to and from specified positions
      </p>
    
      <div className="sublabel">Syntax:</div>
      <SyntaxHighlight syntax="array.copyWithin(target, start, end)" />
    
      <h5>Parameter Description:</h5>
      <ParamDesc
        isRequired={true}
        paramName="target"
        paramNameWidth={75}
        paramDesc="the index position to copy the elements to"
      />
      {/* To be able to pass in JSX elements to the paramDesc, you must pass the value like below
          in this instance it's the <code> tag  */}
      <ParamDesc
        isRequired={false}
        paramName="start"
        paramNameWidth={75}
      >
        the index position to copy from. Default value is <code>0</code>
      </ParamDesc>
      <ParamDesc
        isRequired={false}
        paramName="end"
        paramNameWidth={75}
      >
        the index position to stop copying elements. Default value is <code>array.length</code>
      </ParamDesc>
    
      <div className="sublabel">Example:</div>
      <div className="example">
        <iframe
          title="arr_copyWithin"
          height="400px"
          width="100%"
          src="https://repl.it/@William_Cruz/ExtrovertedPungentRule?lite=true"
          scrolling="no"
          frameBorder="no"
          allowFullScreen={true}
          sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
        />
      </div>
    </div>
  );
};

export default ArrCopyWithin;
