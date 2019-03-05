import React from 'react';
// import PropTypes from 'prop-types';

class NumToFixed extends React.Component {
  render() {
    return (
      <div>
      <h1>.toFixed()</h1>
        <hr/>
        <div className="sublabel">Description:</div>
        <p className="subtext">The method returns a string, with the number written with a specified number of decimals.
          <ul></ul> 
        </p>
        <div className="sublabel">Syntax:</div>
        <p className="subtext">number.toFixed ( number) 
          <ul>
              <li>Number - Required.</li>
          </ul>
          </p>
        <div className="sublabel">Example:</div>
        <div className="example">
        <iframe height="400px" width="100%" src="https://repl.it/@Zgutier5/toFixed?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>        </div>
      </div>
    );
  }
}

export default NumToFixed;