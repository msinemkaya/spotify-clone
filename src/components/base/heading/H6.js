import classNames from 'classnames';

export default function H6({ children, className }){

  const finalClasses = classNames(className)

  return(
    <>
      <h6 className={finalClasses}>{children}</h6>
    </>
  );
}