import React from 'react';
// import PropTypes from 'prop-types';

class NumIsInteger extends React.Component {
  render() {
    return (
      <div>
      <h1>.isInteger()</h1>
        <hr/>
        <div className="sublabel">Description:</div>
        <p className="subtext">The method determines whether a value an integer.
          <ul> 
            <li>The method also returns true if the value is of the type Number, and an integer (a number without decimals). Otherwise it returns false.</li>
          </ul> 
        </p>
        <div className="sublabel">Syntax:</div>
        <p className="subtext">.isInteger( number) 
          <ul>
              <li>Number - Required.</li>
          </ul>
          </p>
        <div className="sublabel">Example:</div>
        <div className="example">
          <iframe height="400px" width="100%" src="https://repl.it/@Zgutier5/isInteger?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>        </div>
      </div>
    );
  }
}

export default NumIsInteger;