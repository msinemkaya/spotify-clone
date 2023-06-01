import A from 'components/base/A';
import Heading from './Heading';

export default function LinkHeading({ type, children }){
  return(
    <A to={'#'}>
      <Heading as={type} className={'hover:underline font-semibold'}>
        {children}
      </Heading>
    </A>
  );
}