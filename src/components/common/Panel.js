import classNames from 'classnames';
import Wrapper from './Wrapper';

export default function Panel({ children, className }){

  const finalClasses = classNames('bg-panel absolute top-full rounded text-white !p-1 whitespace-nowrap min-w-[10rem] flex flex-col items-start' , className)

  return(
    <Wrapper className={finalClasses}>
      {children}
    </Wrapper>
  );
}
