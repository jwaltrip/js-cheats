import React from 'react';
// import PropTypes from 'prop-types';

class NumParseFloat extends React.Component {
  render() {
    return (
      <div>
      <h1>.parseFloat()</h1>
        <hr/>
        <div className="sublabel">Description:</div>
        <p className="subtext">The method parses a string and returns a number.
          <ul> 
            <li>Spaces are allowed. Only the first number is returned.</li>
          </ul> 
        </p>
        <div className="sublabel">Syntax:</div>
        <p className="subtext">parseFloat( number) 
          <ul>
              <li>Number - Required.</li>
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

export default NumParseFloat;