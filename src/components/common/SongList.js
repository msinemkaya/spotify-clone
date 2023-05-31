import Container from 'components/base/Container';
import SongListItem from './SongListItem';

export default function SongList({ lists }){
  return(
    <Container className={'flex flex-col '}>
      {lists.map((list, index) => (
        <SongListItem list={list} key={index}/>
      ))}
    </Container>
  );
}