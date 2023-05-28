import classNames from 'classnames';

export default function H2({ children, className }){

  const finalClasses = classNames(className)

  return(
    <>
      <h2 className={finalClasses}>{children}</h2>
    </>
  );
}