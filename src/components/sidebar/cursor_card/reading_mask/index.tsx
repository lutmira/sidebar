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
      zIndex: zIndex,
      width: '100%',
      position: 'fixed',
    }), [])
    return (
      <>
        <div style={{
          ...commonStyles,
          top: 0,
          height: coordinates.y - height/2,
          background: 'rgba(0,0,0,0.3)'
        }}/>
        <div style={{
          ...commonStyles,
          height: height,
          boxSizing: 'border-box',
          borderColor: borderColor,
          pointerEvents: 'none',
          top: coordinates.y - height/2,
          border: `${borderWidth}px solid #B30047`,
          borderLeftWidth: 0,
          borderRightWidth: 0
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