import classNames from 'classnames';

export default function Wrapper({ children, className }){

  const finalClasses = classNames('bg-base rounded-lg px-3 py-2', className)

  return(
    <div className={finalClasses}>
      {children}
    </div>
  );
}