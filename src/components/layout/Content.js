import Container from 'components/base/Container';
import HomePage from 'components/sections/HomePage';
import SearchPage from 'components/sections/SearchPage';
import { Routes, Route } from 'react-router-dom';

export default function Content({  }){
  return(
    <Container className={'overflow-y-auto max-w-full'}>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
       </Routes>
    </Container>
  );
}