import "./Login.css";
import React from "react";
import { auth, provider } from "./firebase";
import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import { login } from "./features/userSlice";
import Logo from "./Logo.png";

const Login = () => {
  const dispatch = useDispatch();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) =>
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        )
      )
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src={Logo} alt="" />
        <Button variant="contained" color="primary" onClick={signIn}>
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default Login;
