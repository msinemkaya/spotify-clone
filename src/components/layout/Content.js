import Wrapper from 'components/common/Wrapper';
import HomePage from 'components/sections/HomePage';
import SearchPage from 'components/sections/SearchPage';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

export default function Content({  }){

  const [scroll, setScroll] = useState(false)

  const handleScroll = () => {
    setScroll(true)
  }

  return(
    <Wrapper className='overflow-y-auto max-w-full h-[87.5vh] pt-0' onScroll={handleScroll}>
      <Routes>
          <Route path="/" element={<HomePage scroll={scroll} />} />
          <Route path="/search" element={<SearchPage />} />
       </Routes>
    </Wrapper>
  );
}