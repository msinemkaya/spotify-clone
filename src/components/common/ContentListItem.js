import A from 'components/base/A';
import Wrapper from './Wrapper';
import Img from 'components/base/heading/Img';
import H4 from 'components/base/heading/H4';
import Heading from './Heading';

export default function ContentListItem({ item }){
  return(
    <A to={'#'} className={'hover:no-underline'}>
      <Wrapper className={'bg-highlight !p-4 md flex flex-col '}>
        <Img url={item.img} className={`${item.subtitle === 'Sanatçı' ? 'rounded-full' : 'rounded-md'} mb-4 self-center`}/>
        <H4 className={'text-white font-bold tracking-wide truncate pb-1'}>{item.title}</H4>
        <Heading as={'h6'} className={'truncate'}>{item.subtitle}</Heading>
      </Wrapper>
    </A>
  );
}