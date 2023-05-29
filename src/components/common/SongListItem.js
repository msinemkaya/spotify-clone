import Button from 'components/base/Button';
import Container from 'components/base/Container';
import Icon from 'components/base/Icon';
import Span from 'components/base/Span';
import H4 from 'components/base/heading/H4';
import Img from 'components/base/heading/Img';
import Heading from './Heading';

export default function SongListItem({ list }){
  return(
    <Button className={'hover:bg-elevated-base rounded-md p-2 text-start flex gap-3'}>
      <Img url={list.img} className={`${!list.subinfo ? 'rounded-full' : 'rounded-md'} w-12 `}/>
      <Container>
        <H4 className={'text-white mb-1'}>{list.title}</H4>
        <Container className={'flex gap-2 items-center'}>
          <Icon type={'pin'} className={'text-green-700'}/>
          <Span className={'text-white/70 text-xs tracking-wide'}>{list.subtitle}</Span>
          {list.subinfo && <Span className={'text-white/70 text-xs tracking-wide'}> • {list.subinfo}</Span> }
        </Container>
      </Container>
    </Button>
  );
}