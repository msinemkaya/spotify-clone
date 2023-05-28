import classNames from 'classnames';

export default function H4({ children, className }){

  const finalClasses = classNames(className)

  return(
    <>
      <h4 className={finalClasses}>{children}</h4>
    </>
  );
}