import React, {useState} from 'react';
//Custom Components
import ReadingMask from "./reading_mask";
//Custom Styles
import '../../../styles/index.css'
//Components
import {Carousel} from "antd";

const Cursor = () => {
  const [clickCount, setClickCount] = useState(1);

  const handleClick = () => {
    setClickCount(prevCount => prevCount + 1);
    console.log('here')
  };

  const renderCursor = () => {
    if (clickCount === 1)
      return <div key="1" className='zoom-in-cursor'/>
    else if (clickCount === 2)
      return <div key="2"><ReadingMask /></div>
    else
      return <div key="3" className='custom-cursor'/>
  };



  return (
    <Carousel afterChange={handleClick}>
      {renderCursor()}
    </Carousel>
  );
};

export default Cursor;