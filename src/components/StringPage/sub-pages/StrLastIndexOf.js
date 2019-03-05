import React from 'react';
import "./sub-pages.css";
// import PropTypes from 'prop-types';

class StrLastIndexOf extends React.Component {
  render() {
    return (
      <div>
        <h1>.lastIndexOf()</h1>
        <hr/>
        <div className="sublabel">Description:</div>
        <p className="subtext">The method returns the position of the last occurance of specified value in a string.
          <ul> 
            <li>String is searched from end to beginning, rut returns index regularly (0 = first index/character).</li>  
            <li>Method returns a -1 if the value to search for never occurs.</li>
            <li>Case Senistive</li>
          </ul> 
        </p>
        <div className="sublabel">Syntax:</div>
        <p className="subtext">string.lastIndexOf( search value , start) 
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

export default StrLastIndexOf;