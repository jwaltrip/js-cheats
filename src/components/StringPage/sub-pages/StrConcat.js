import React from 'react';
import "./sub-pages.css";
// import PropTypes from 'prop-types';

class StrConcat extends React.Component {
  render() {
    return (
      <div>
        <h1>.concat()</h1>
        <hr/>
        <div className="sublabel">Description:</div>
        <p className="subtext">This function joins two or more strings together.
          <ul> 
            <li>This method does not change the existings strings, but returns a new string containing the text of the joined strings.</li>
          </ul> 
        </p>
        <div className="sublabel">Syntax:</div>
        <p className="subtext">string.concat(string1, string2, ...stringX) 
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

export default StrConcat;