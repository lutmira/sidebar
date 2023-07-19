import React, {useState} from 'react';
// Custom Components
import ReadingMask from './reading_mask';
// Custom Styles
import '../../../styles/index.css';
import {CustomCard} from "../../../components";

const Cursor  = () => {
  const [clickCount, setClickCount] = useState<number>(0);

  const handleClick = () : void => {
    setClickCount(prevCount  => prevCount + 1);
  };

  const renderCursor = () => {
    if (clickCount  === 0) {
      return <div className="zoom-in-cursor" />;
    } else if (clickCount % 3  === 1) {
      return <ReadingMask />;
    } else {
      return <div className="custom-cursor" />;
    }
  };

  return (
    <CustomCard
      title='Cursor'
      active={clickCount!==0}
      onClick={handleClick}
      children={renderCursor()}
    />
  );
};

export default Cursor;