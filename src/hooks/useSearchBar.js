import { useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

export default function useSearchBar(){

  const [isSearch, setIsSearch] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/search') {
      setIsSearch(true)
    } else {
      setIsSearch(false)
    }
  }, [])

  return isSearch
}