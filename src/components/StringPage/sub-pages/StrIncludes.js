import React from 'react';
import "./sub-pages.css";
// import PropTypes from 'prop-types';

class StrIncludes extends React.Component {
  render() {
    return (
      <div>
        <h1>.includes()</h1>
        <hr/>
        <div className="sublabel">Description:</div>
        <p className="subtext">The method determines whether a string contains the characters of a specified string.
          <ul> 
            <li>Returns true if the string contains the characters, and false if not.</li>
            <li>Case Sensitive.</li>
          </ul> 
        </p>
        <div className="sublabel">Syntax:</div>
        <p className="subtext">string.includes( search value , start) 
          <ul>
              <li>Start - Optional not required, default is 0.</li>
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

export default StrIncludes;