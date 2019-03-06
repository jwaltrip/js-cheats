import React from 'react';
import "./sub-pages.css";
// import PropTypes from 'prop-types';

class StrSubString extends React.Component {
  render() {
    return (
      <div>
        <h1>.substring()</h1>
        <hr/>
        <div className="sublabel">Description:</div>
        <p className="subtext">Extracts the characters from a string, between two specified indices, and returns the new substring. 
          <ul> 
            <li>Extracts the characters in a string between "start" and "end", not including "end" itself.</li>
            <li>Does not change the original string.</li>
          </ul> 
        </p>
        <div className="sublabel">Syntax:</div>
        <p className="subtext">string.substring(start, end) 
          <ul></ul>
          </p>
        <div className="sublabel">Example:</div>
        <div className="example">
            <iframe height="400px" width="100%" src="https://repl.it/@Zgutier5/substring?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>        </div>
        </div>
    );
  }
}

export default StrSubString;