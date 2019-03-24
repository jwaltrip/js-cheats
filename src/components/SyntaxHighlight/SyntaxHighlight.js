import React from 'react';
import Highlight from 'react-highlight';

const SyntaxHighlight = ({ syntax }) => {
  return (
    <div className="syntax">
      <Highlight className='javascript'>
        {syntax}
      </Highlight>
    </div>
  );
};

export default SyntaxHighlight;