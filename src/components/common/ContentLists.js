import Container from 'components/base/Container';
import ListHeading from './ListHeading';
import ContentListItem from './ContentListItem';
import { useEffect, useState } from 'react';

export default function ContentLists({ title, list }){

  const [numberToMap, setNumberToMap] = useState(2);
  const [screen, setScreen] = useState(window.innerWidth)

  const screenHandler = () => {
    setScreen(window.innerWidth)
  }

  useEffect(() => {
    window.onresize = screenHandler

    if(screen < 1024) {
      setNumberToMap(2)
    } else if(screen >= 1024 && screen < 1280) {
      setNumberToMap(3)
    } else if (screen >= 1280) {
      setNumberToMap(4)
    }

    console.log(window.innerWidth)
    
  }, [screen])

  return(
    <Container>
      <ListHeading>{title}</ListHeading>
      <Container className={'grid grid-cols-2 gap-3 lg:grid-cols-3 xl:grid-cols-4'}>
        {list.slice(0, (numberToMap)).map((item, index)=> (
          <ContentListItem item={item} key={index}/>
        ))}
      </Container>
    </Container>
  );
}