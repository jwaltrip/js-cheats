import React from 'react';
import BadgeRequired from "../BadgeRequired/BadgeRequired";
import BadgeOptional from "../BadgeOptional/BadgeOptional";

const ParamDesc = ({ isRequired, paramName, paramDesc, paramNameWidth, children }) => {
  // check if param is required or optional
  let badge;
  if (isRequired) {
    badge = <BadgeRequired />;
  } else {
    badge = <BadgeOptional />;
  }
  
  // check if @paramDesc is a child element rather than passed as a prop
  let desc;
  if (children && !paramDesc) {
    desc = children;
  } else {
    desc = paramDesc;
  }
  
  return (
    <div className="params">
      <div className="param-name" style={{ width: paramNameWidth, minWidth: 10 }}>
        <code>{paramName}</code>
      </div>
      <div>
        {badge} <span className="param-desc"> {desc} </span>
      </div>
    </div>
  );
};

export default ParamDesc;