import React from 'react';
import "./sub-pages.css";
// import PropTypes from 'prop-types';

class StrStartsWith extends React.Component {
  render() {
    return (
      <div>
        <h1>.startsWith()</h1>
        <hr/>
        <div className="sublabel">Description:</div>
        <p className="subtext">Determines whether a string begins with the characters of a specified string.
          <ul> 
            <li>Method returns true if the string begins with the characters, and false if not.</li>
            <li>Case Senistive</li>
          </ul> 
        </p>
        <div className="sublabel">Syntax:</div>
        <p className="subtext">string.startsWith( search value , start) 
          <ul>
            <li>Start - Optional not required, and the default is 0.</li>
           
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

export default StrStartsWith;