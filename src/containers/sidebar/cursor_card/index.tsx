import React, {useState} from 'react';
// Custom Styles
import '../../../styles/index.css';
//Custom Components
import ReadingMask from './reading_mask';
import CustomCursor from "./custom_cursor";
import {CustomCard} from "../../../components";

const Cursor  = () => {
  const [clickCount, setClickCount] = useState<number>(0);

  const handleClick = () : void => {
    setClickCount(prevCount  => prevCount + 1);
  };

  const renderCursor = () => {
    if (clickCount  % 3 === 1) {
      return <CustomCursor cursorType="bigger"/>;
    } else if (clickCount % 3 === 2) {
      return <ReadingMask />;
    } else {
      return <CustomCursor cursorType="regular"/>;
    }
  };

  return (
    <>
      <CustomCard title="Cursor" active={clickCount !== 0} onClick={handleClick}>{<></>}</CustomCard>
      <div>{renderCursor()}</div>
    </>
  );
};

export default Cursor;