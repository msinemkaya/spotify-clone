import classNames from 'classnames';
import React from 'react';

const FlexBox = React.forwardRef((props, ref) => {

  const {children, className, ...rest} = props

  const finalClasses = classNames('flex items-center', className)

  return(
    <div className={finalClasses} {...rest} ref={ref}>
      {children}
    </div>
  );
})

export default FlexBox