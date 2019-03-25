import React from "react";
import ParamDesc from "../../ParamDesc/ParamDesc";
import SyntaxHighlight from "../../SyntaxHighlight/SyntaxHighlight";

const StrSlice = () => {
  return (
    <div>
      <h1>.slice()</h1>
      <hr />
      
      <div className="sublabel">Description:</div>
      <p className="subtext">
        Extracts parts of a string and returns the extracted parts in a new string
      </p>
      <ul>
        <li>
          Use the <code>start</code> and <code>end</code> parameters to specify the part of the string you want to extract
        </li>
        <li>Use a negative number to select from the end of the string</li>
        <li><strong>Note:</strong> the <code>end</code> index is <strong><i>not</i></strong> included in resulting string</li>
      </ul>
      
      <div className="sublabel">Syntax:</div>
      <SyntaxHighlight syntax="string.slice(start, end)" />
    
      <h5>Parameter Description:</h5>
      <ParamDesc
        isRequired={true}
        paramName="start"
        paramNameWidth={60}
        paramDesc="start index of where to begin string slice"
      />
      {/* To be able to pass in JSX elements to the paramDesc, you must pass the value like below
          in this instance it's the <code> tag  */}
      <ParamDesc
        isRequired={false}
        paramName="end"
        paramNameWidth={60}
      >
        end index of where to end string slice. Default value is <code>string.length</code>
      </ParamDesc>
    
      <div className="sublabel">Example:</div>
      <div className="example">
        <iframe
          title="string-slice"
          height="400px"
          width="100%"
          src="https://repl.it/@Zgutier5/slice?lite=true"
          scrolling="no"
          frameBorder="no"
          allowFullScreen={true}
          sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
        />
      </div>
    </div>
  );
};

export default StrSlice;
