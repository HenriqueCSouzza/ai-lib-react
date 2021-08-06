import React from 'react';
import Moment from 'react-moment';

function Date({format, children, ...props}) {
  const dateFormat = typeof format === 'undefined' ? 'DD/MM/YYYY' : format;
  return (
    <Moment format={dateFormat} {...props}>
      {children}
    </Moment>
  );
}

export default Date;
