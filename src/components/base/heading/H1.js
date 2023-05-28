import classNames from 'classnames';

export default function H1({ children, className }){

  const finalClasses = classNames(className)

  return(
    <>
      <h1 className={finalClasses}>{children}</h1>
    </>
  );
}