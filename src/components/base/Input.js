import { forwardRef } from 'react'

const Input = forwardRef((props, ref) => {
  const { placeholder, className, type, ...rest} = props
  return (
    <input
      ref={ref}
      type={type}
      placeholder={placeholder}
      className={className}
      {...rest}
    />
  )
})

export default Input
