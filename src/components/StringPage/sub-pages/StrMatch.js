import React from 'react';
import "./sub-pages.css";
// import PropTypes from 'prop-types';

class StrMatch extends React.Component {
  render() {
    return (
      <div>
        <h1>.match()</h1>
        <hr/>
        <div className="sublabel">Description:</div>
        <p className="subtext">The method searches a string for a match against a regular expression, and returns the matches as an array object.
          <ul></ul> 
        </p>
        <div className="sublabel">Syntax:</div>
        <p className="subtext">string.match( regexp ) 
          <ul></ul>
          </p>
        <div className="sublabel">Example:</div>
        <div className="example">
            <iframe height="400px" width="100%" src="https://repl.it/@Zgutier5/match?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>        </div>
      </div>
    );
  }
}

export default StrMatch;