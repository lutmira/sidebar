import React from "react";
//Helpers
import {useMouseMovement} from "../../../../helpers";

const
  ReadingMask = ({
                   height = 200,
                   borderWidth = 5,
                   borderColor = '#076b7f',
                   zIndex = 10000
                 }) => {
    const {coordinates} = useMouseMovement();

    const commonStyles: React.CSSProperties = React.useMemo(() => ({
      left: 0,
      width: '100%',
      zIndex: zIndex,
      position: 'fixed',
    }), [zIndex])
    return (
      <>
        <div style={{
          ...commonStyles,
          top: 0,
          background: 'rgba(0,0,0,0.3)',
          height: coordinates.y - height/2
        }}/>
        <div style={{
          ...commonStyles,
          height: height,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          pointerEvents: 'none',
          boxSizing: 'border-box',
          borderColor: borderColor,
          top: coordinates.y - height/2,
          border: `${borderWidth}px solid #B30047`
        }}/>
        <div style={{
          ...commonStyles,
          bottom: 0,
          background: 'rgba(0,0,0,0.3)',
          height: `calc(100vh - ${coordinates.y + height/2}px)`
        }}/>
      </>
    );
  };
export default ReadingMask;