import React from 'react';

type WindowSize = [number, number];

export function useWindowSize() {
  const [size, setSize] = React.useState<WindowSize>([0, 0]);

  React.useEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return size;
}
