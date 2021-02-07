import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar, IconButton } from "@material-ui/core";
import Search from "./Search";
import Logo from "./Logo.png";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerleft"></div>
        <div className="home__headerright">
          <Link to="/mail">Gmail</Link>
          <IconButton href="https://socio-email.web.app/">
            <AppsIcon />
          </IconButton>
          <Avatar />
        </div>
      </div>

      <div className="home__body">
        <img src={Logo} alt="" />
        <div className="home__inputcontainer" />
        <Search hideButtons />
      </div>
    </div>
  );
}

export default Home;
