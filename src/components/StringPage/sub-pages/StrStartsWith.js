import React from "react";
import ParamDesc from "../../ParamDesc/ParamDesc";
import SyntaxHighlight from "../../SyntaxHighlight/SyntaxHighlight";

const StrStartsWith = () => {
  return (
    <div>
      <h1>.startsWith()</h1>
      <hr />
      
      <div className="sublabel">Description:</div>
      <p className="subtext">
        Determines whether a string begins with the characters of a specified string
      </p>
      <ul>
        <li>
          Method returns <code>true</code> if the string begins with the characters, and <code>false</code> if not
        </li>
        <li>Case senistive</li>
      </ul>
      
      <div className="sublabel">Syntax:</div>
      <SyntaxHighlight syntax="string.startsWith(searchValue, start)" />
    
      <h5>Parameter Description:</h5>
      <ParamDesc
        isRequired={true}
        paramName="searchValue"
        paramNameWidth={115}
        paramDesc="value to search for in string"
      />
      {/* To be able to pass in JSX elements to the paramDesc, you must pass the value like below
          in this instance it's the <code> tag  */}
      <ParamDesc
        isRequired={false}
        paramName="start"
        paramNameWidth={115}
      >
        the default index value is <code>0</code>
      </ParamDesc>
    
      <div className="sublabel">Example:</div>
      <div className="example">
        <iframe
          title="string-startsWith"
          height="400px"
          width="100%"
          src="https://repl.it/@Zgutier5/startsWith?lite=true"
          scrolling="no"
          frameBorder="no"
          allowFullScreen={true}
          sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
        />
      </div>
    </div>
  );
};

export default StrStartsWith;
