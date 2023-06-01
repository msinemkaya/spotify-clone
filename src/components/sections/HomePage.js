import Container from 'components/base/Container';
import ContentLists from 'components/common/ContentLists';
import UserMenu from 'components/common/UserMenu';

export default function HomePage({ scroll }){

  const list1 = [
    {
      img: 'https://dailymix-images.scdn.co/v2/img/7ca63c161edb5f49ed3d7d42230c902cb4971553/1/tr/default',
      title: 'Daily Mix 1',
      subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, tempore.'
    },
    {
      img: 'https://dailymix-images.scdn.co/v2/img/7ca63c161edb5f49ed3d7d42230c902cb4971553/1/tr/default',
      title: 'Daily Mix 2',
      subtitle: 'Lorem ipsum dolor'
    },
    {
      img: 'https://dailymix-images.scdn.co/v2/img/7ca63c161edb5f49ed3d7d42230c902cb4971553/1/tr/default',
      title: 'Daily Mix 1',
      subtitle: 'Sanatçı'
    },
    {
      img: 'https://dailymix-images.scdn.co/v2/img/7ca63c161edb5f49ed3d7d42230c902cb4971553/1/tr/default',
      title: 'Daily Mix 1',
      subtitle: 'Sanatçı'
    },
  ]

  return(
    <>
      <UserMenu scroll={scroll}/>
      <Container className='flex flex-col gap-8'>
        <ContentLists title='Popüler radyolar' list={list1}/>
        <ContentLists title='Popüler radyolar' list={list1}/>
        <ContentLists title='Popüler radyolar' list={list1}/>
      </Container>
    </>
  );
}