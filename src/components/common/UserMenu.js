import Container from 'components/base/Container'
import FlexBox from './FlexBox'
import SpotifyButton from './SpotifyButton'
import { useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import SearchInput from './SearchInput'
import Span from 'components/base/Span'

export default function UserMenu({}) {
  const [isSearch, setIsSearch] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/search') {
      setIsSearch(true)
    } else {
      setIsSearch(false)
    }
  }, [])

  return (
    <FlexBox className={'justify-between gap-2 !px-4 !py-4 box-content h-8 sticky top-0 bg-base z-50'}>
      <Container className={'flex gap-2 items-center min-w-0'}>
        <SpotifyButton type='left' black className={'h-8'} />
        <SpotifyButton type='right' black className={'h-8'} />
        {isSearch && <SearchInput placeholder={'Ne dinlemek istersin'}/>}
      </Container>
      <Container className={'flex gap-2 items-center min-w-0'}>
        <SpotifyButton
          type='download'
          black
          scale
          className={'text-sm font-medium tracking-wide min-w-0'}
        >
          <Span className={'truncate'}>Uygulmayı Yükle</Span>
        </SpotifyButton>
        <SpotifyButton type='user' black scale iconSize={20} />
      </Container>
    </FlexBox>
  )
}
