import classNames from 'classnames';

export default function H5({ children, className }){

  const finalClasses = classNames(className)

  return(
    <h5 className={finalClasses}>{children}</h5>
  );
}