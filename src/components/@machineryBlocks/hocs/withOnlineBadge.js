import React from 'react'
import Badge from '@material-ui/core/Badge'
import {withStyles} from '@material-ui/core/styles'

const styledBy = (property, mapping) => props => mapping[props[property]]

const StyledBadge = withStyles(theme => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: styledBy('background', {
      default: `0 0 0 2px ${theme.palette.background.paper}`,
      secondary: `0 0 0 2px ${theme.palette.secondary.main}`,
      primary: `0 0 0 2px ${theme.palette.secondary.primary}`,
    }),
  },
}))(Badge)

const withOnlineBadge = (WrappedComponent, background = 'default') => ({
  ...props
}) => {
  return (
    <StyledBadge
      overlap="circle"
      background={background}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      variant="dot"
    >
      <WrappedComponent {...props} />
    </StyledBadge>
  )
}

export default withOnlineBadge
