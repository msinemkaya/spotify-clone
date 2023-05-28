import classNames from 'classnames';
import H1 from './H1';
import H2 from './H2';
import H3 from './H3';
import H4 from './H4';
import H5 from './H5';
import H6 from './H6';

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