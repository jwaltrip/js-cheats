import React from 'react';
// import PropTypes from 'prop-types';

class NumParseInt extends React.Component {
  render() {
    return (
      <div>
      <h1>.parseInt()</h1>
        <hr/>
        <div className="sublabel">Description:</div>
        <p className="subtext">The method parses a string and returns a whole number. Spaces are allowed. Only the first number is returned.
          <ul> 
            <li>If the first character cannot be converted to a number, parseInt() returns a NaN.</li>
          </ul> 
        </p>
        <div className="sublabel">Syntax:</div>
        <p className="subtext">parseInt( number) 
          <ul>
              <li>Number - Required.</li>
          </ul>
          </p>
        <div className="sublabel">Example:</div>
        <div className="example">
          <iframe height="400px" width="100%" src="https://repl.it/@Zgutier5/parseInt?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>        </div>
      </div>
    );
  }
}

export default NumParseInt;