import React from 'react'
import clsx from 'clsx'
import {Link as RouterLink} from 'react-router-dom'
import {Link as MuiLink} from '@material-ui/core'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.calypso.main,
    fontWeight: 500,
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}))

const Link = ({
  to,
  href,
  target,
  component,
  size = 'medium',
  color,
  underline,
  onClick,
  children,
  className,
  id,
}) => {
  const sizeMapping = {
    small: 'caption',
    medium: 'body2',
    large: 'body1',
  }
  const classes = useStyles()
  return (
    <MuiLink
      className={clsx(classes.root, className)}
      href={href}
      to={to}
      target={target}
      component={(onClick && 'button') || (to && RouterLink) || (href && 'a')}
      color={color}
      variant={sizeMapping[size]}
      underline={underline}
      onClick={onClick}
      id={id}
    >
      {children}
    </MuiLink>
  )
}
export default Link

Link.propTypes = {
  children: PropTypes.any,
  href: PropTypes.string,
  target: PropTypes.string,
  component: PropTypes.string,
  color: PropTypes.string,
  variant: PropTypes.string,
  underline: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
}

Link.defaultProps = {
  children: 'teste',
  component: 'button',
  color: 'primary',
  variant: 'body1',
  underline: 'none',
}
