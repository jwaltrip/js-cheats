import React from 'react';
import "./sub-pages.css";
// import PropTypes from 'prop-types';

class StrIndexOf extends React.Component {
  render() {
    return (
      <div>
        <h1>.indexOf()</h1>
        <hr/>
        <div className="sublabel">Description:</div>
        <p className="subtext">The method returns the position of the first occurance of specified value in a string.
          <ul> 
            <li>Method returns a -1 if the value to search for never occurs.</li>
            <li>Case Senistive</li>
          </ul> 
        </p>
        <div className="sublabel">Syntax:</div>
        <p className="subtext">string.indexOf( search value , start) 
          <ul>
            <li>Search Value - Is required.</li>
            <li>Start - Optional not required, and the default is the length of the string.</li>
           
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

export default StrIndexOf;