import React from "react";
import "./Header.css";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import AppsRoundedIcon from "@material-ui/icons/AppsRounded";
import NotificationsRoundedIcon from "@material-ui/icons/NotificationsRounded";
import { Avatar, IconButton } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Logo from "./Logo.png";

const Header = () => {
  const user = useSelector(selectUser);

  return (
    <div className="header">
      <div className="header__left">
        <img src={Logo} alt="" />
      </div>
      <div className="header__middle">
        <SearchRoundedIcon />
        <input type="text" placeholder="search for your mails" />
        <ArrowDropDownRoundedIcon className="header__inputCaret" />
      </div>
      <div className="header__right">
        <p className="name">Hello, {user.displayName}</p>
        <Avatar src={user?.photoURL} style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
};

export default Header;
