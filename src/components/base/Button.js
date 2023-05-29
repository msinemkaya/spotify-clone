import Icon from './Icon';

export default function Button({ children ,className, type, iconSize, ...rest}){


  return(
    <button className={className} {...rest}>
      {type && <Icon type={type} size={iconSize} />}
      {children}
    </button>
  );
}
