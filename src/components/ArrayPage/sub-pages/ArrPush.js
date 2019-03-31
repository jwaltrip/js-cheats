import React from "react";
import SyntaxHighlight from "../../SyntaxHighlight/SyntaxHighlight";
import ParamDesc from "../../ParamDesc/ParamDesc";

const ArrPush = () => {
  return (
    <div>
      <h1>.push()</h1>
      <hr />
    
      <div className="sublabel">Description:</div>
      <p className="subtext">
        Adds one or more items to the end of an array
      </p>
      <ul>
        <li>Mutates the original array</li>
        <li>Returns the new array <code>length</code></li>
      </ul>
    
      <div className="sublabel">Syntax:</div>
      <SyntaxHighlight syntax="array.push(item1, item2, ..., itemX)" />
    
      <h5>Parameter Description:</h5>
      <ParamDesc
        isRequired={true}
        paramName="item1"
        paramNameWidth={75}
      >
        the first <code>item</code> to add to the end of the <code>array</code>
      </ParamDesc>
      <ParamDesc
        isRequired={false}
        paramName="item2"
        paramNameWidth={75}
      >
        additional <code>item</code> to add to the end of the <code>array</code>
      </ParamDesc>
      <ParamDesc
        isRequired={false}
        paramName="itemX"
        paramNameWidth={75}
      >
        additional <code>item</code> to add to the end of the <code>array</code>
      </ParamDesc>
    
      <div className="sublabel">Example:</div>
      <div className="example">
        <iframe
          title="arr_push"
          height="425px"
          width="100%"
          src="https://repl.it/@sarahcheatham/push-example?lite=true"
          scrolling="no"
          frameBorder="no"
          allowFullScreen={true}
          sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
        />
      </div>
    </div>
  );
};

export default ArrPush;
