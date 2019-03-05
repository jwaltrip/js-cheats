import React from 'react';
import "./sub-pages.css";
// import PropTypes from 'prop-types';

class StrReplace extends React.Component {
  render() {
    return (
      <div>
        <h1>.replace()</h1>
        <hr/>
        <div className="sublabel">Description:</div>
        <p className="subtext">The method searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.
          <ul>
            <li>Only the first instance of the value will be replaced.</li>    
          </ul> 
        </p>
        <div className="sublabel">Syntax:</div>
        <p className="subtext">string.replace( search value, new value ) 
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

export default StrReplace;