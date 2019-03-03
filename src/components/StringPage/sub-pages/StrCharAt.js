import React from 'react';
import "./sub-pages.css";
// import PropTypes from 'prop-types';

class StrCharAt extends React.Component {
  render() {
    return (
      <div>
        <h1>.charAt()</h1>
        <hr/>
        <div className="sublabel">Description:</div>
        <p className="subtext">Returns the characters at the specified index in a string
          <ul> 
            <li>Index of the first character is 0.</li>
            <li>Index of the last character is string.length - 1.</li>
          </ul> 
        </p>
        <div className="sublabel">Syntax:</div>
        <p className="subtext">string.charAt(index) 
          <ul></ul>
          </p>
        <div className="sublabel">Example:</div>
        <div className="example">
            <iframe height="425px" width="100%" src="https://repl.it/@sarahcheatham/join-example?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
        </div>
      </div>
    );
  }
}

export default StrCharAt;