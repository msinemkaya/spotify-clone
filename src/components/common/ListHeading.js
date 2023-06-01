import FlexBox from './FlexBox';
import LinkHeading from './LinkHeading';

export default function ListHeading({ children }){
  return(
    <FlexBox className={'justify-between mb-4'}>
      <LinkHeading type='h2'>{children}</LinkHeading>
      <LinkHeading type='h6'>Tümünü göster</LinkHeading>
    </FlexBox>
  );
}