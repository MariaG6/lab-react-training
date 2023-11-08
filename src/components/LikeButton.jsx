import React, { useState } from 'react';

function LikeButton() {
  const [counter, setCounter] = useState(0);
  const colorsArray = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const bgColor = colorsArray[counter % colorsArray.length];

  function addLikes() {
    setCounter(counter + 1);
  }

  const background = {
    backgroundColor: bgColor,
  };

  return (
    <div className="container">
      <button className="like-btn" style={background} onClick={addLikes}>
        {counter} Likes
      </button>
    </div>
  );
}

export default LikeButton;
