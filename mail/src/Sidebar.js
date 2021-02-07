import { Button, IconButton } from "@material-ui/core";
import SidebarOption from "./SidebarOption";
import React from "react";
import "./Sidebar.css";
import AddIcon from "@material-ui/icons/Add";
import InboxRoundedIcon from "@material-ui/icons/InboxRounded";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import { useDispatch } from "react-redux";
import { logout } from "./features/userSlice";
import { auth } from "./firebase";
import { openSendMessage } from "./features/mailSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };

  return (
    <div className="sidebar">
      <Button
        className="sidebar__compose"
        startIcon={<AddIcon fontSize="large" />}
        onClick={() => dispatch(openSendMessage())}
      >
        Write a mail
      </Button>
      <SidebarOption
        Icon={InboxRoundedIcon}
        title="Inbox"
        number={23}
        selected
      />
      <SidebarOption Icon={StarRoundedIcon} title="Starred" />
      <SidebarOption Icon={ExpandMoreRoundedIcon} title="More" />

      <div className="sidebar__foot">
        <Button onClick={signOut} variant="contained" color="primary">
          Sign Out
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
