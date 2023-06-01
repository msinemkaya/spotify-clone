const { forwardRef } = require('react')

const Input = forwardRef((props, ref) => {
  const { placeholder, className, type, ...rest} = props
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      {...rest}
    />
  )
})

export default Input
