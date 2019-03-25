import React from "react";
import SyntaxHighlight from "../../SyntaxHighlight/SyntaxHighlight";
import ParamDesc from "../../ParamDesc/ParamDesc";

const ArrIncludes = () => {
  return (
    <div>
      <h1>.includes()</h1>
      <hr />
    
      <div className="sublabel">Description:</div>
      <p className="subtext">
        The <code>includes()</code> method determines whether an array includes a certain value among its entries
      </p>
      <ul>
        <li>Returns <code>true</code> or <code>false</code> as appropriate</li>
      </ul>
    
      <div className="sublabel">Syntax:</div>
      <SyntaxHighlight syntax="array.includes(searchValue, fromIndex)" />
    
      <h5>Parameter Description:</h5>
      <ParamDesc
        isRequired={true}
        paramName="searchValue"
        paramNameWidth={110}
        paramDesc="value to search for in the array"
      />
      <ParamDesc
        isRequired={false}
        paramName="fromIndex"
        paramNameWidth={110}
        paramDesc="the index of where to begin searching"
      />
    
      <div className="sublabel">Example:</div>
      <div className="example">
        <iframe
          title="arr_includes"
          height="400px"
          width="100%"
          src="https://repl.it/@William_Cruz/WretchedSpeedyBugs?lite=true"
          scrolling="no"
          frameBorder="no"
          allowFullScreen={true}
          sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
        />
      </div>
    </div>
  );
};

export default ArrIncludes;
