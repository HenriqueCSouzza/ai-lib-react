import React from 'react'

export default function usePopupState(id) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const onClick = event => {
    setAnchorEl(event?.currentTarget)
  }

  const onClose = () => {
    setAnchorEl(null)
  }
  const open = Boolean(anchorEl)

  const aria = 'aria-describedby'
  const popupProps = {onClose, anchorEl, open, id}
  const triggerProps = {onClick, [aria]: id}

  return {popupProps, triggerProps}
}
