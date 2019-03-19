import React from 'react';
import { Badge } from 'reactstrap';
import Highlight from "react-highlight";
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
        <p className="subtext">
          <Highlight className="javascript">
            {"parseFloat(number)"}
          </Highlight> 
          <ul>
              <li><code>Number</code> - <Badge color="primary">required</Badge></li>
          </ul>
          </p>
        <div className="sublabel">Example:</div>
        <div className="example">
            <iframe height="400px" width="100%" src="https://repl.it/@Zgutier5/parseFloat?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
        </div>
    </div>
    );
  }
}

export default NumParseFloat;