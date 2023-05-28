import classNames from 'classnames';
import H1 from '../base/heading/H1';
import H2 from '../base/heading/H2';
import H3 from '../base/heading/H3';
import H4 from '../base/heading/H4';
import H5 from '../base/heading/H5';
import H6 from '../base/heading/H6';

export default function Heading({ as, className, children }){

   const finalClasses = classNames(className, 'text-white', {
    '!text-white/70 text-sm': as === 'h6',
    'text-2xl': as === 'h2'

   })

  switch (as) {
    case 'h1':
      return <H1 className={finalClasses}>{children}</H1>
    case 'h2':
      return <H2 className={finalClasses}>{children}</H2>;
    case 'h3':
      return <H3 className={finalClasses}>{children}</H3>;
    case 'h4':
      return <H4 className={finalClasses}>{children}</H4>;
    case 'h5':
      return <H5 className={finalClasses}>{children}</H5>;
    case 'h6':
      return <H6 className={finalClasses}>{children}</H6>;
    default:
      throw Error('Unknown:' + as);
  }
}