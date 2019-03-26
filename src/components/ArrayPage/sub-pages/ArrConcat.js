import React from "react";
import SyntaxHighlight from "../../SyntaxHighlight/SyntaxHighlight";
import ParamDesc from "../../ParamDesc/ParamDesc";

const ArrConcat = () => {
  return (
    <div>
      <h1>.concat()</h1>
      <hr />
    
      <div className="sublabel"> Description: </div>
      <p className="subtext">Used to merge two or more arrays</p>
      <ul>
        <li>This method does not mutate the original array, instead it returns a new array</li>
      </ul>
    
      <div className="sublabel">Syntax:</div>
        <SyntaxHighlight syntax="const newArray = oldArray.concat(array1, array2, ..., arrayN)" />
    
      <h5>Parameter Description:</h5>
        <ParamDesc
        isRequired={true}
        paramName="array1"
        paramNameWidth={75}
        >
        the first <code>array</code> to join with <code>oldArray</code>
        </ParamDesc>
        <ParamDesc
        isRequired={false}
        paramName="array2"
        paramNameWidth={75}
        >
        additional <code>array</code> to join with <code>oldArray</code>
      </ParamDesc>
      <ParamDesc
        isRequired={false}
        paramName="arrayN"
        paramNameWidth={75}
      >
        additional <code>arrays</code> to join with <code>oldArray</code>
      </ParamDesc>
    
      <div className="sublabel">Example:</div>
      <div className="example">
        <iframe
          title="array_concat"
          height="400px"
          width="100%"
          src="https://repl.it/@sarahcheatham/concat-array-example?lite=true"
          scrolling="no"
          frameBorder="no"
          allowFullScreen={true}
          sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
        />
      </div>
    </div>
  );
};

export default ArrConcat;
