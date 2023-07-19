import React, { useState } from 'react';
// Custom Components
import ReadingMask from './reading_mask';
// Custom Styles
import '../../../styles/index.css';

interface CursorProps {
  handleCardClick: () => void;
}
const Cursor : React.FC<CursorProps> = ({ handleCardClick }) => {
  const [clickCount, setClickCount] = useState<number>(0);

  const handleClick = () : void => {
    setClickCount(prevCount  => prevCount + 1);
  };

  const renderCursor = () => {
    if (clickCount % 3 === 0) {
      return <div className="zoom-in-cursor" />;
    } else if (clickCount % 3  === 1) {
      return <ReadingMask />;
    } else {
      return <div className="custom-cursor" />;
    }
  };

  return (
    <div onClick={handleClick}>
      {renderCursor()}
    </div>
  );
};

export default Cursor;