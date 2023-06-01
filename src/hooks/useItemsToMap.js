import { useEffect, useState } from 'react';

export default function useItemsToMap(){
  const [numberToMap, setNumberToMap] = useState(2);
  const [screen, setScreen] = useState(window.innerWidth)

  const screenHandler = () => {
    setScreen(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', screenHandler)

    if(screen < 1024) {
      setNumberToMap(2)
    } else if(screen >= 1024 && screen < 1280) {
      setNumberToMap(3)
    } else if (screen >= 1280) {
      setNumberToMap(4)
    }
    
    return () => {
      window.removeEventListener('resize', screenHandler)
    }

  }, [screen])

  return numberToMap
}