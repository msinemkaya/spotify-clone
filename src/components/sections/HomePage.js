import UserMenu from 'components/common/UserMenu';
import Wrapper from 'components/common/Wrapper';

export default function HomePage({  }){
  return(
    <Wrapper className={'max-w-full'}>
      <UserMenu/>
    </Wrapper>
  );
}