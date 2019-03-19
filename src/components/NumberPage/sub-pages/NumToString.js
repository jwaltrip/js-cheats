import React from 'react';
import { Badge } from 'reactstrap';
import Highlight from "react-highlight";
// import PropTypes from 'prop-types';

class NumToString extends React.Component {
  render() {
    return (
      <div>
      <h1>.toString()</h1>
        <hr/>
        <div className="sublabel">Description:</div>
        <p className="subtext">The method returns a number as a string.
          <ul> 
            <li>All number methods can be used on any type of numbers (literals, variables, or expressions).</li>
          </ul> 
        </p>
        <div className="sublabel">Syntax:</div>
        <p className="subtext">
          <Highlight className="javascript">
            {"number.toString (number)"}
          </Highlight> 
          <ul>
              <li><code>Number</code> - <Badge color="primary">required</Badge></li>
          </ul>
          </p>
        <div className="sublabel">Example:</div>
        <div className="example">
            <iframe height="400px" width="100%" src="https://repl.it/@Zgutier5/toString?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
        </div>
      </div>
    );
  }
}

export default NumToString;