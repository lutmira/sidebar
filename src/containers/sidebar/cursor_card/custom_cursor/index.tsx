import React from 'react';
//Helpers
import { useMouseMovement } from '../../../../helpers';
import '../../../../constants/images/cursor.png'

interface CustomCursorProps {
  cursorType: 'regular' | 'bigger'
}

const CustomCursor: React.FC<CustomCursorProps> = ({ cursorType }) => {
  const { coordinates } = useMouseMovement();

  const cursorStyle: React.CSSProperties = {
    width: 0,
    height: 0,
    zIndex: 9999,
    position: 'fixed',
    top: coordinates.y,
    left: coordinates.x,
  };

  const regularCursorStyle: React.CSSProperties = {
    ...cursorStyle,
    cursor: 'context-menu',
  };

  const biggerCursorStyle: React.CSSProperties = {
    ...cursorStyle,
    cursor: 'cell',
  };

  const selectedCursorStyle = cursorType === 'regular' ? regularCursorStyle : biggerCursorStyle;

  return <div style={selectedCursorStyle} />;
};

export default CustomCursor;