import React from 'react';
import "./sub-pages.css";
// import PropTypes from 'prop-types';

class StrParseInt extends React.Component {
  render() {
    return (
      <div>
        <h1>.parseInt()</h1>
        <hr/>
        <div className="sublabel">Description:</div>
        <p className="subtext">The method parses a string and returns an integer.
          <ul> 
            <li>Only the first number in the string is returned.</li>
            <li>If the first character cannot be converted to a number, parseInt() returns a NaN.</li>
          </ul> 
        </p>
        <div className="sublabel">Syntax:</div>
        <p className="subtext">string.parseInt( string , radix) 
          <ul>
              <li>Radix - Optional not required.</li>
          </ul>
          </p>
        <div className="sublabel">Example:</div>
        <div className="example">
            <iframe height="425px" width="100%" src="https://repl.it/@sarahcheatham/join-example?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
        </div>
      </div>
    );
  }
}

export default StrParseInt;