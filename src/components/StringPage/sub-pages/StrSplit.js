import React from 'react';
import "./sub-pages.css";
// import PropTypes from 'prop-types';

class StrSplit extends React.Component {
  render() {
    return (
      <div>
        <h1>.split()</h1>
        <hr/>
        <div className="sublabel">Description:</div>
        <p className="subtext">Used to split a string into an array of substrings, and returns the new array.
          <ul> 
            <li>If an empty string ("") is used as the seperator, the string is split between each character.</li>
            <li>Does not change the original string.</li>
          </ul> 
        </p>
        <div className="sublabel">Syntax:</div>
        <p className="subtext">string.split(separator, limit) "Both separator and limit are optional"
          <ul>
            <li>Seperator - Specifies the character the use for splitting the string</li>
            <li>Limit - Integer that specifies the number of splits, items after not included</li>
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

export default StrSplit;