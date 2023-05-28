import classNames from 'classnames';

export default function A({ children, to, className }){

  const finalClasses = classNames(className, 'hover:underline')

  return(
    <a href={to} className={finalClasses}>
      {children}
    </a>
  );
}