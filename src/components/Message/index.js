import React from "react";
import { useSnackbar } from "notistack";
import { useSelector, useDispatch } from "react-redux";

export default function Message() {
  const { enqueueSnackbar } = useSnackbar();
  const notification = useSelector(({ notification }) => notification.message);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const { open, message, type } = notification;
    if (open) {
      enqueueSnackbar(message, {
        variant: type,
        anchorOrigin: { vertical: "top", horizontal: "center" },
        autoHideDuration: 2000,
      });
    }
  }, [enqueueSnackbar, notification, dispatch]);
  return <></>;
}
