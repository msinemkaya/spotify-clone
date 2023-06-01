import { useEffect, useState } from 'react';

export default function useScroll(scroll){
  const [scrollX, setScrollX] = useState(0)
  const [scrolEnd, setscrolEnd] = useState(false)

  useEffect(() => {
    if (
      scroll.current &&
      scroll?.current?.scrollWidth === scroll?.current?.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
    return () => {};
  }, [scroll?.current?.scrollWidth, scroll?.current?.offsetWidth, scroll]);

  const handleScroll = (e) => {
    setScrollX(scroll.current.scrollLeft);
    if (
      Math.floor(scroll.current.scrollWidth - scroll.current.scrollLeft) <=
      scroll.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  }

  return [handleScroll, scrolEnd, scrollX]
}