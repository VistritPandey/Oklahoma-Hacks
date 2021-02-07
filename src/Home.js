import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "./Search";
import Logo from "./Logo.png";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerleft"></div>
        <div className="home__headerright">
          <Link to="/mail">Gmail</Link>
          <AppsIcon />
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
