import React from 'react';
import "./sub-pages.css";
// import PropTypes from 'prop-types';

class StrSubstr extends React.Component {
  render() {
    return (
      <div>
        <h1>.substr()</h1>
        <hr/>
        <div className="sublabel">Description:</div>
        <p className="subtext">Extracts parts of a string, beginning at the character at the specified position, and it returns the specified number of characters.
          <ul> 
            <li>To extract from the end of a string; use negative numbers.</li>
            <li>Does not change the orginal string.</li>
          </ul> 
        </p>
        <div className="sublabel">Syntax:</div>
        <p className="subtext">string.substr(start, length) 
          <ul>
            <li>Length - Number of characters to extract, it is also optional not required.</li>
           
          </ul>
          </p>
        <div className="sublabel">Example:</div>
        <div className="example">
          <iframe height="400px" width="100%" src="https://repl.it/@Zgutier5/substr?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>        </div>
      </div>
    );
  }
}

export default StrSubstr;