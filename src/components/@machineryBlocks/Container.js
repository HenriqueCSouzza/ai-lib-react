import {makeStyles} from '@material-ui/core/styles'
const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
  },
}))

export default function Container({children, ...props}) {
  const classes = useStyles()
  return <div className={classes.root}>{children}</div>
}
