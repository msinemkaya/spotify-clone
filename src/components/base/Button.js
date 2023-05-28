import Icon from './Icon';

export default function Button({ children ,className, type, iconSize, }){


  return(
    <button className={className}>
      {type && <Icon type={type} size={iconSize} />}
      {children}
    </button>
  );
}
