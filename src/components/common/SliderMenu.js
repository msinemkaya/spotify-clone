import SpotifyButton from './SpotifyButton';
import FlexBox from './FlexBox';
import Container from 'components/base/Container';
import { useRef } from 'react';
import useScroll from 'hooks/useScroll';

export default function SliderMenu(){

  
  const scroll = useRef(null)

  const items = [
    'çalma listeleri',
    'sanatçılar',
    'albümler',
    `podcast'ler ve programlar`
  ]

  const [handleScroll, scrolEnd, scrollX] = useScroll(scroll)

  return(
    <Container className='relative py-2 px-1'>
      {scrollX !== 0 && <SpotifyButton elevated type='left' className='z-10 absolute top-2 left-1'  />}
        <FlexBox className='flex gap-2 items-center overflow-auto no-scrollbar slider-shadow' onScroll={handleScroll} ref={scroll}>
          {items.map((item, index)=> <SpotifyButton key={index} elevated className='!text-white h-8 whitespace-nowrap text-sm py-1 px-3 capitalize'>{item}</SpotifyButton>)}
        </FlexBox>
      {!scrolEnd && <SpotifyButton elevated type='right' className='z-10 absolute top-2 right-1'/>}
    </Container>
  );
}