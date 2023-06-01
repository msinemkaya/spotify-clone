import classNames from 'classnames';

export default function Wrapper({ children, className, ...rest }){

  const finalClasses = classNames('bg-base rounded-lg px-3 py-2', className)

  return(
    <div className={finalClasses} {...rest}>
      {children}
    </div>
  );
}