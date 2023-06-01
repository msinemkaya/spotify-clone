import Container from 'components/base/Container';
import H2 from 'components/base/heading/H2';
import Img from 'components/base/heading/Img';
import generateColor from 'generateColor';
import { useEffect, useRef } from 'react';

export default function Card({ item }){

  const card = useRef(null)

  useEffect(() => {
    card.current.style.background = generateColor()
  })

  return(
    <Container className='rounded-lg pb-[70%] relative overflow-hidden' ref={card}>
      <H2 className='text-white p-4 text-2xl font-bold'>
        {item.title}
      </H2>
      <Img url={item.img} className='absolute rotate-[30deg] -bottom-3 -right-3 w-1/2' />
    </Container>
  );
}