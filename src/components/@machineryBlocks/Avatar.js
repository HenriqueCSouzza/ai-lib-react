import React from 'react'
import {Avatar as MuiAvatar} from '@material-ui/core'

export default function Avatar({size, inline, ...props}) {
  return (
    <MuiAvatar
      {...props}
      style={{
        width: size,
        height: size,
        display: inline ? 'inline-flex' : undefined,
      }}
    />
  )
}
