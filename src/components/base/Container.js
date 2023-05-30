import React from 'react'

const Container = React.forwardRef((props, ref) => {
  const { children, className } = props

  return (
    <div className={className} ref={ref}>
      {children}
    </div>
  )
})

export default Container
