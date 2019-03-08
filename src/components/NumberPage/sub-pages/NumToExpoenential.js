import React from 'react';
// import PropTypes from 'prop-types';

class NumToExponentail extends React.Component {
  render() {
    return (
      <div>
      <h1>.toExponential()</h1>
        <hr/>
        <div className="sublabel">Description:</div>
        <p className="subtext">The method returns a string, with a number rounded and written using exponential notation.
          <ul> 
            <li>A parameter defines the number of characters behind the decimal point.</li>
          </ul> 
        </p>
        <div className="sublabel">Syntax:</div>
        <p className="subtext">number.toExponentail ( number) 
          <ul>
              <li>Number - Required.</li>
          </ul>
          </p>
        <div className="sublabel">Example:</div>
        <div className="example">
            <iframe height="400px" width="100%" src="https://repl.it/@Zgutier5/toExpoenentail?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>        </div>
      </div>
    );
  }
}

export default NumToExponentail;