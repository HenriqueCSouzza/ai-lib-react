import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import usePopupState from "./hooks/usePopupSate";
import Box from "./Box";
import Avatar from "./Avatar";
import DropdownMenu from "./DropdownMenu";
import withOnlineBadge from "./hocs/withOnlineBadge";
import TopbarCaret from "./TopbarCaret";

const useStyles = makeStyles((theme) => ({
  root: {
    cursor: "pointer",
  },
}));

export default function TopbarUserBadge({ user }) {
  const classes = useStyles();
  const AvatarOnline = withOnlineBadge(Avatar, "secondary");
  const { triggerProps, popupProps } = usePopupState("user-badge");
  return (
    <>
      <Box
        className={classes.root}
        display="flex"
        justifyContent="center"
        alignItems="center"
        {...triggerProps}
      >
        <Box mr={1}>
          <AvatarOnline src={user.avatar} size={32} />
        </Box>
        <Typography variant="caption">{user.displayName}</Typography>
        <TopbarCaret size="small" />
      </Box>
      <DropdownMenu
        {...popupProps}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        segmentPosition="right"
        items={[
          // { label: "Convidar amigos", to: "/referal" },
          // { label: "Minhas preferências", to: "/settings/profile" },
          // { label: "Gerenciar conta", to: "/settings/account" },
          // "divider",
          { label: "Sair", to: "/app/logout" },
        ]}
      />
    </>
  );
}
