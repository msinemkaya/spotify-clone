import classNames from 'classnames';

export default function H3({ children, className }){

  const finalClasses = classNames(className)

  return(
    <h3 className={finalClasses}>{children}</h3>
  );
}