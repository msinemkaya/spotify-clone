import A from 'components/base/A';
import Wrapper from './Wrapper';
import Img from 'components/base/heading/Img';
import H4 from 'components/base/heading/H4';
import Heading from './Heading';
import SpotifyButton from './SpotifyButton';

export default function ContentListItem({ item }){
  return(
    <A to='#' className={'hover:no-underline'}>
      <Wrapper className={'bg-highlight !p-4 md flex flex-col hover:bg-elevated-base transition-all duration-300 relative group'}>
        <Img url={item.img} className={`${item.subtitle === 'Sanatçı' ? 'rounded-full' : 'rounded-md'} mb-4 self-center`}/>
        <H4 className={'text-white font-bold tracking-wide truncate pb-1'}>{item.title}</H4>
        <Heading as='h6' className={'truncate'}>{item.subtitle}</Heading>
        <SpotifyButton type='play' className={'bg-green-600 w-12 h-12 shadow-xl shadow-black/50 !text-black hover:text-black hover:bg-green-500 flex items-center justify-center absolute right-5 bottom-[86px] scale-0 group-hover:scale-100 transition-all duration-500 z-20'} iconSize={32}/>
      </Wrapper>
    </A>
  );
}