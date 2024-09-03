import React, { useState } from 'react';
import './style.css'; // Import the CSS file for styling

const HelpBubble = ({ text }) => {
  const [showHelp, setShowHelp] = useState(false);

  return (
    <div className="help-bubble-container">
      <span
        className="help-icon"
        onMouseEnter={() => setShowHelp(true)}
        onMouseLeave={() => setShowHelp(false)}
      >
        ?
      </span>
      {showHelp && (
        <div className="help-text">
          {text}
        </div>
      )}
    </div>
  );
};

export default HelpBubble;
