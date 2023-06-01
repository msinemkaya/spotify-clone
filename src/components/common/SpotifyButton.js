import classNames from 'classnames'
import Button from 'components/base/Button';

export default function SpotifyButton({ children, className, highlight, elevated, scale, type, iconSize, black }){

  const finalClassnames = classNames('rounded-full p-2 text-white/70 hover:text-white transition-all duration-300 flex items-center gap-2', className, {
    'hover:bg-highlight': highlight,
    'bg-elevated-base hover:bg-elevated-highlight': elevated,
    'hover:scale-105': scale,
    'bg-black !text-white': black,
  })
  
  return(
    <>
      <Button className={finalClassnames} type={type} iconSize={iconSize}>
        {children}
      </Button>
    </>
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