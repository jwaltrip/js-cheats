import React from 'react';
import Highlight from 'react-highlight';

// will create a gray backround for text

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