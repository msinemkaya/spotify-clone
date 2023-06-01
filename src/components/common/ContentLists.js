import Container from 'components/base/Container';
import ListHeading from './ListHeading';
import ContentListItem from './ContentListItem';
import useItemsToMap from 'hooks/useItemsToMap';

export default function ContentLists({ title, list }){

  const numberToMap = useItemsToMap()

  return(
    <Container>
      <ListHeading>{title}</ListHeading>
      <Container className='grid grid-cols-2 gap-3 lg:grid-cols-3 xl:grid-cols-4'>
        {list.slice(0, (numberToMap)).map((item, index)=> (
          <ContentListItem item={item} key={index}/>
        ))}
      </Container>
    </Container>
  );
}