import classNames from 'classnames'
import { icons } from './ButtonIcons'; 
import { Fragment } from 'react';

export default function Button({ children ,className, highlight, elevated, type }){

  const finalClassnames = classNames('rounded-full p-2 text-white/70 hover:text-white transition-all', className, {
    'hover:bg-highlight': highlight,
    'bg-elevated-base hover:bg-elevated-highlight': elevated,
  })

  

  return(
    <button className={finalClassnames}>
      {children}
      {icons.map((icon, index) => (
        icon.type === type ? <Fragment key={index}>{icon.icon}</Fragment>  : null
      ))}
    </button>
  );
}

Button.propTypes = {
  checkVariations: ({ highlight, elevated }) => {
    const count = Number(!!highlight) + Number(!!elevated)
  
    if(count > 1) {
      return new Error('only one type can be true')
    }
  },
}