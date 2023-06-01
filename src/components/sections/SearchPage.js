import Container from 'components/base/Container';
import Card from 'components/common/Card';
import Heading from 'components/common/Heading';
import UserMenu from 'components/common/UserMenu';

export default function SearchPage({  }){

  const items = [
    {
      title: 'Podcastler',
      img: 'https://i.scdn.co/image/ab6765630000ba8a9417936d038e7a2f8dee2554'
    },
    {
      title: 'Canlı Etkinlikler',
      img: 'https://i.scdn.co/image/ab6765630000ba8a9417936d038e7a2f8dee2554'
    },
    {
      title: 'Senin için Hazırlandı',
      img: 'https://i.scdn.co/image/ab6765630000ba8a9417936d038e7a2f8dee2554'
    },
    {
      title: 'Yeni Çıkanlar',
      img: 'https://i.scdn.co/image/ab6765630000ba8a9417936d038e7a2f8dee2554'
    },
    {
      title: 'Pop',
      img: 'https://i.scdn.co/image/ab6765630000ba8a9417936d038e7a2f8dee2554'
    },
    {
      title: 'Hip Hop',
      img: 'https://i.scdn.co/image/ab6765630000ba8a9417936d038e7a2f8dee2554'
    },
    {
      title: 'Ruh Hali',
      img: 'https://i.scdn.co/image/ab6765630000ba8a9417936d038e7a2f8dee2554'
    },
    {
      title: 'Popüler',
      img: 'https://i.scdn.co/image/ab6765630000ba8a9417936d038e7a2f8dee2554'
    },
    {
      title: 'Listeler',
      img: 'https://i.scdn.co/image/ab6765630000ba8a9417936d038e7a2f8dee2554'
    },
    {
      title: 'Rock',
      img: 'https://i.scdn.co/image/ab6765630000ba8a9417936d038e7a2f8dee2554'
    },
    {
      title: 'Indie',
      img: 'https://i.scdn.co/image/ab6765630000ba8a9417936d038e7a2f8dee2554'
    },
    {
      title: 'keşfet',
      img: 'https://i.scdn.co/image/ab6765630000ba8a9417936d038e7a2f8dee2554'
    },
  ]

  return(
    <>
      <UserMenu />
      <Heading as='h2' className='font-bold mt-8 mb-4'>Hepsine göz at</Heading>
      <Container className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6'>
        {items.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </Container>
    </>
  );
}