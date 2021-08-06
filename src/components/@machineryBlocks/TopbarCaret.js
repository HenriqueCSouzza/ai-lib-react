import React from 'react'
import clsx from 'clsx'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    verticalAlign: 'middle',
    color: theme.palette.common.white,
  },
  smallSize: {
    width: '0.75em',
    height: '0.75em',
  },
  mediumSize: {
    width: '0.9em',
    height: '0.9em',
  },
}))

export default function TopbarCaret({size = 'small'}) {
  const classes = useStyles()
  return (
    <ExpandMoreIcon className={clsx(classes.root, classes[`${size}Size`])} />
  )
}
