import classNames from 'classnames'
import ButtonIcon from './ButtonIcon';

export default function Button({ children ,className, highlight, elevated, type, scale }){

  const finalClassnames = classNames('rounded-full p-2 text-white/70 hover:text-white transition-all', className, {
    'hover:bg-highlight': highlight,
    'bg-elevated-base hover:bg-elevated-highlight': elevated,
    'hover:scale-105': scale,
  })

  return(
    <button className={finalClassnames}>
      <ButtonIcon type={type} />
      {children}
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