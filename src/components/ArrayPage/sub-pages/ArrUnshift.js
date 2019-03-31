import React from "react";
import SyntaxHighlight from "../../SyntaxHighlight/SyntaxHighlight";
import ParamDesc from "../../ParamDesc/ParamDesc";

const ArrUnshift = () => {
  return (
    <div>
      <h1>.unshift()</h1>
      <hr />
    
      <div className="sublabel">Description:</div>
      <p className="subtext">
        Adds one or more items to the beginning of the array and returns the new <code>length</code> of the array
      </p>
    
      <div className="sublabel">Syntax:</div>
      <SyntaxHighlight syntax="const newArrayLength = array.unshift(item1, item2,...,itemX)" />
    
      <h5>Parameter Description:</h5>
      <ParamDesc
        isRequired={true}
        paramName="item1"
        paramNameWidth={70}
        paramDesc="item to add to the beginning of the array"
      />
      <ParamDesc
        isRequired={false}
        paramName="item2"
        paramNameWidth={70}
        paramDesc="additional item to add to the beginning of the array"
      />
      <ParamDesc
        isRequired={false}
        paramName="itemX"
        paramNameWidth={70}
        paramDesc="additional items to add to the beginning of the array"
      />
    
      <div className="sublabel">Example:</div>
      <div className="example">
        <iframe
          title="arr_unshift"
          height="400px"
          width="100%"
          src="https://repl.it/@William_Cruz/CelebratedGlisteningMenu?lite=true"
          scrolling="no"
          frameBorder="no"
          allowFullScreen={true}
          sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
        />
      </div>
    </div>
  );
};

export default ArrUnshift;
