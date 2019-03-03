import React from 'react';
import "./sub-pages.css";
import Gist from 'react-gist';
// import PropTypes from 'prop-types';

class ArrPush extends React.Component {
  render() {
    return (
      <div>
        <h1>push()</h1>
        <hr/>
        <div className="sublabel">Description:</div>
        <p className="subtext">Adds one or more items to the end of the array.</p>
        <p className="subtext">Returns the new array length.</p>
        <p className="subtext">Mutates the original array.</p>
        <div className="sublabel">Syntax:</div>
        {/*<p className="subtext">array.push(item1, item2, ..., itemX)</p>*/}
        <Gist id="ca6de64511349a6452f3ee09ef0e1c16" style={{ width: 500 }} />
        <div className="sublabel">Example:</div>
        <div className="example">
          <iframe height="425px" width="100%" src="https://repl.it/@sarahcheatham/push-example?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
        </div>
      </div>
    );
  }
}

export default ArrPush;