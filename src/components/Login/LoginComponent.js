import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
// import { Redirect } from 'react-router-dom';
import './LoginComponent.css';

const Login = ({ history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [showErrorMsg, setShowErrorMsg] = useState(false);

  useEffect(() => {
    const jwtToken = Cookies.get('jwt_token');
    if (jwtToken !== undefined) {
      history.replace('/');
    }
  }, [history]);

  const onSuccessLogin = (jwtToken) => {
    Cookies.set('jwt_token', jwtToken, { expires: 30 });
    history.replace('/');
  };

  const onFailureLogin = (error) => {
    setErrorMsg(error);
    setShowErrorMsg(true);
  };

  const onSubmitForm = async (event) => {
    event.preventDefault();

    let modifiedUsername = username;
    let modifiedPassword = password;

    if (username.toLowerCase().trim() === 'swarnakumar') {
      modifiedUsername = 'rahul';
    }

    if (password === 'swarna@2218') {
      modifiedPassword = 'rahul@2021';
    }

    const userDetails = { username: modifiedUsername, password: modifiedPassword };
    const LoginApiUrl = 'https://apis.ccbp.in/login';
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    };

    const response = await fetch(LoginApiUrl, options);
    const data = await response.json();

    if (response.ok) {
      onSuccessLogin(data.jwt_token);
    } else {
      onFailureLogin(data.error_msg);
    }
  };

  const updateUsername = (event) => setUsername(event.target.value);

  const updatePassword = (event) => setPassword(event.target.value);

  const renderUsernameField = () => (
    <div className="input-field-container">
      <label htmlFor="username" className="login-input-label">
        USERNAME
      </label>
      <input
        type="text"
        value={username}
        className="login-input-field"
        placeholder="swarnakumar"
        id="username"
        onChange={updateUsername}
      />
    </div>
  );

  const renderPasswordField = () => (
    <div className="input-field-container">
      <label htmlFor="password" className="login-input-label">
        PASSWORD
      </label>
      <input
        type="password"
        value={password}
        className="login-input-field"
        placeholder="swarna@2218"
        id="password"
        onChange={updatePassword}
      />
    </div>
  );

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={onSubmitForm}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
          className="website-logo-login-form"
        />
        {renderUsernameField()}
        {renderPasswordField()}
        <div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showErrorMsg && <p className="error-msg">*{errorMsg}</p>}
        </div>
      </form>
    </div>
  );
};

export default Login;
