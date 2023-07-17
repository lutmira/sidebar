import { useEffect, useState } from "react";

interface CoordinatesType {
  x: number,
  y: number
}

export const useMouseMovement = () => {
  const [coordinates, setCoordinates] = useState<CoordinatesType>({ x: 0, y: 0 });

  useEffect(() => {
    const handleWindowMouseMove = (event: MouseEvent) =>
      setCoordinates({ x: event.clientX, y: event.clientY });

    window.addEventListener('mousemove', handleWindowMouseMove);

    return () => window.removeEventListener('mousemove', handleWindowMouseMove);
  }, []);

  return { coordinates };
};