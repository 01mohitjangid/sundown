import React from 'react';

function MovingText() {
  return (
    <div id="moving-text">
      {[...Array(3)].map((_, i) => (
        <div className="con" key={i}>
          <h1>EXPERIENCES</h1>
          <div id="gola" />
          <h1>CONTENT</h1>
          <div id="gola" />
          <h1>ENVIRONMENTS</h1>
          <div id="gola" />
        </div>
      ))}
    </div>
  );
}

export default MovingText;
