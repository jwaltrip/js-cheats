import React from 'react';
import "./sub-pages.css";
// import PropTypes from 'prop-types';

class StrRepeat extends React.Component {
  render() {
    return (
      <div>
        <h1>.repeat()</h1>
        <hr/>
        <div className="sublabel">Description:</div>
        <p className="subtext">The method returns a new string with a specified number of copies of the string it was called on.
          <ul></ul> 
        </p>
        <div className="sublabel">Syntax:</div>
        <p className="subtext">string.repeat( count ) 
          <ul>
              <li>Count - Number of time the original string value should be repeated in the new string.</li>
          </ul>
          </p>
        <div className="sublabel">Example:</div>
        <div className="example">
            <iframe height="400px" width="100%" src="https://repl.it/@Zgutier5/repeat?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>        </div>
      </div>
    );
  }
}

export default StrRepeat;