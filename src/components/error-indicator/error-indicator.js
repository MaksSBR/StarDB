import React from 'react';

import './error-indicator.css';
import icon from './death-star.png';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <span className="boom">
        <img src={icon} alt="Error icon"/>
        BOOM!
      </span>
      <span>
        sommething has gone terribly wrong
      </span>
      <span>
        (but we already sent droidss to fix it)
      </span>
    </div>
  );
};

export default ErrorIndicator
