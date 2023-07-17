import React, {useState} from 'react';
//Custom Components
import ReadingMask from "./reading_mask";

const Cursor = () => {
  const [clickCount, setClickCount] = useState(0);
  const [isCursorBigger, setIsCursorBigger] = useState(false);

  const handleClick = () => {
    setClickCount(prevCount => prevCount + 1);
    setIsCursorBigger(true);
  };

  const renderCursor = () => {
    if (clickCount === 1) {
      return (
        <div
          style={{
            cursor: isCursorBigger ? 'zoom-in' : 'default',
            fontSize: isCursorBigger ? '150%' : '100%',
          }}
        >
          Cursor
        </div>
      );
    } else if (clickCount === 2) {
      return (
        <div>
          {/* Render the reading mask component */}
          <ReadingMask />
        </div>
      );
    } else {
      setIsCursorBigger(false);
      return (
        <div>
          {/* Default cursor state */}
          Cursor
        </div>
      );
    }
  };

  return (
    <div onClick={handleClick}>
      {renderCursor()}
    </div>
  );
};

export default Cursor;