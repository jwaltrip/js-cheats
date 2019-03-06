import React from 'react';
import "./sub-pages.css";
// import PropTypes from 'prop-types';

class StrSearch extends React.Component {
  render() {
    return (
      <div>
        <h1>.search()</h1>
        <hr/>
        <div className="sublabel">Description:</div>
        <p className="subtext">Searches a string for a specified value, and returns the position of the match.
          <ul> 
            <li>Search value can be a string or a regular expression.</li>
            <li>Return - 1 if no match is found.</li>
          </ul> 
        </p>
        <div className="sublabel">Syntax:</div>
        <p className="subtext">string.search(search value) 
          <ul></ul>
          </p>
        <div className="sublabel">Example:</div>
        <div className="example">
            <iframe height="400px" width="100%" src="https://repl.it/@Zgutier5/search?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>        </div>
      </div>
    );
  }
}

export default StrSearch;