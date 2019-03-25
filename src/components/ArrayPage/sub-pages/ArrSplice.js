import React from "react";
import SyntaxHighlight from "../../SyntaxHighlight/SyntaxHighlight";
import ParamDesc from "../../ParamDesc/ParamDesc";

const ArrSplice = () => {
  return (
    <div>
      <h1>.splice()</h1>
      <hr />
    
      <div className="sublabel">Description:</div>
      <p className="subtext">Changes the contents of an array by removing or replacing existing elements and/or adding new elements</p>
      <ul>
        <li>The <code>splice()</code> method mutates the original array</li>
        <li>Use negative value for <code>index</code> to specify the position from the end of the array</li>
        <li>Returns an <code>array</code> of the deleted items</li>
      </ul>
    
      <div className="sublabel">Syntax:</div>
      <SyntaxHighlight syntax="const deletedItems = array.splice(index, howMany, item1,...itemX)" />
    
      <h5>Parameter Description:</h5>
      <ParamDesc
        isRequired={true}
        paramName="index"
        paramNameWidth={70}
        paramDesc="zero-based index at which to start changing the array"
      />
      <ParamDesc
        isRequired={false}
        paramName="howMany"
        paramNameWidth={70}
      >
        the number of array items to delete starting at the <code>index</code> parameter
      </ParamDesc>
      <ParamDesc
        isRequired={false}
        paramName="item1"
        paramNameWidth={70}
      >
        the elements to add to the array, beginning at the <code>start</code> index. If you don't specify any elements, <code>splice()</code> will only remove elements from the array
      </ParamDesc>
      <ParamDesc
        isRequired={false}
        paramName="itemX"
        paramNameWidth={70}
      >
        the elements to add to the array, beginning at the <code>start</code> index. If you don't specify any elements, <code>splice()</code> will only remove elements from the array
      </ParamDesc>
    
      <div className="sublabel">Example:</div>
      <div className="example">
        <iframe
          title="arr_splice"
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

export default ArrSplice;
