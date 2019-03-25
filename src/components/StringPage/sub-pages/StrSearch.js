import React from "react";
import ParamDesc from "../../ParamDesc/ParamDesc";
import SyntaxHighlight from "../../SyntaxHighlight/SyntaxHighlight";

const StrSearch = () => {
  return (
    <div>
      <h1>.search()</h1>
      <hr />
      
      <div className="sublabel">Description:</div>
      <p className="subtext">
        Searches a string for a specified value, and returns the index of the match
      </p>
      <ul>
        <li><code>searchValue</code> can be a string or a regular expression</li>
        <li>Returns <code>-1</code> if no match is found</li>
      </ul>
      
      <div className="sublabel">Syntax:</div>
      <SyntaxHighlight syntax="string.search(searchValue)" />
    
      <h5>Parameter Description:</h5>
      <ParamDesc
        isRequired={true}
        paramName="searchValue"
        paramNameWidth={115}
        paramDesc="value to search for in string"
      />
    
      <div className="sublabel">Example:</div>
      <div className="example">
        <iframe
          title="string-search"
          height="400px"
          width="100%"
          src="https://repl.it/@Zgutier5/search?lite=true"
          scrolling="no"
          frameBorder="no"
          allowFullScreen={true}
          sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
        />
      </div>
    </div>
  );
};

export default StrSearch;
