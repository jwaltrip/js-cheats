import React from "react";
import SyntaxHighlight from "../../SyntaxHighlight/SyntaxHighlight";
import ParamDesc from "../../ParamDesc/ParamDesc";

const ArrJoin = () => {
  return (
    <div>
      <h1>.join()</h1>
      <hr />
    
      <div className="sublabel">Description:</div>
      <p className="subtext">
        Creates and returns a new <code>string</code> by concatenating all of the elements{" "}
        in an <code>array</code> (or an array-like object), separated by commas or a{" "}
        specified separator string
      </p>
    
      <div className="sublabel">Syntax:</div>
      <SyntaxHighlight syntax="array.join(separator)" />
    
      <h5>Parameter Description:</h5>
      <ParamDesc
        isRequired={false}
        paramName="separator"
        paramNameWidth={90}
      >
        A string to separate each pair of adjacent elements of the array. If omited, the elements will be separated by a <code>,</code>
      </ParamDesc>
    
      <div className="sublabel">Example:</div>
      <div className="example">
        <iframe
          title="arr_join"
          height="425px"
          width="100%"
          src="https://repl.it/@sarahcheatham/join-example?lite=true"
          scrolling="no"
          frameBorder="no"
          allowFullScreen={true}
          sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
        />
      </div>
    </div>
  );
};

export default ArrJoin;
