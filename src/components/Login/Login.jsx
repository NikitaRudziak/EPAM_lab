import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { loginSubmit } from "../../redux/actions/index"

import LoginStyle from "./Login.module.scss";

export function Login(props) {
  return (
    <div className={LoginStyle.loginContainer}>
      <div className={LoginStyle.loginFormCard}>
        <h1>Log In</h1>
        <form
          onSubmit={e => {
            e.preventDefault();
            props.loginSubmit(e.target.login.value, e.target.pass.value);
          }}
          className={LoginStyle.loginFormContainer}
        >
          <div className={LoginStyle.loginForm}>
            <div className={LoginStyle.loginLabelContainer}>
              <label htmlFor="login">Login:</label>
              <label htmlFor="pass">Password:</label>
            </div>
            <div className={LoginStyle.loginInputContainer}>
              <input type="text" name="login" />
              <input type="password" name="pass" />
            </div>
          </div>
          {props.isAuth ? (<Redirect to="/cards" />) : (<div className={LoginStyle.loginIncorrect}>{props.notLoginText}</div>)}
          <input type="submit" value="Log In" className={LoginStyle.loginSubmitButton} />
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    login: state.loginReducer.userID.login,
    pass: state.loginReducer.userID.pass,
    isAuth: state.loginReducer.userID.isAuth,
    notLoginText: state.loginReducer.notLoginText
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginSubmit: (loginform, passform) =>
      dispatch(loginSubmit(loginform, passform))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
