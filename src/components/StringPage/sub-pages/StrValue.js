import React from 'react';
//import "./sub-pages.css";
// import PropTypes from 'prop-types';

class StrValue extends React.Component {
  render() {
    return (
      <div>
        <h1>valueOf()</h1>
        <hr/>
        <div className="sublabel">Description:</div>
        <p className="subtext">This method returns the primitive value of a string object.</p>
        <ul></ul>
        <div className="sublabel">Syntax:</div>
        <ul></ul>
        <p className="subtext">string.valueOf()</p>
        <div className="sublabel">Example:</div>
        <div className="example">
          <iframe height="400px" width="100%" src="https://repl.it/@Zgutier5/valueof?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
        </div>
      </div>
    );
  }
}

export default StrValue;