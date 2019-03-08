import React from 'react';
import Highlight from 'react-highlight';
import "./sub-pages.css";

class StrIncludes extends React.Component {
  render() {
    return (
      <div>
        <h1>.includes()</h1>
        <hr />
        <div className="sublabel">Description:</div>
        <p className="subtext">
          The method determines whether a string contains the characters of a specified string.
        </p>
        <ul>
          <li>
            Returns <code>true</code> if the string contains the characters, and <code>false</code> if not
          </li>
          <li>Case sensitive</li>
        </ul>
        <div className="sublabel">Syntax:</div>
        <div style={{ maxWidth: 600, marginTop: 20 }}>
          <Highlight className='javascript'>
            {"string.includes(searchValue, start)"}
          </Highlight>
        </div>
        <ul>
          <li><code>start</code> - Optional not required, default is <code>0</code></li>
        </ul>
        <div className="sublabel">Example:</div>
        <div className="example">
          <iframe
            height="400px"
            width="100%"
            src="https://repl.it/@Zgutier5/includes?lite=true"
            scrolling="no"
            frameBorder="no"
            allowFullScreen={true}
            sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
          />
        </div>
      </div>
    );
  }
}

export default StrIncludes;