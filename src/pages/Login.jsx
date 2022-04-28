import React, { useRef } from 'react';
import '@styles/Login.scss';

import logo from '@logos/logo_yard_sale.svg';

const Login = () => {
  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      usename: formData.get('email'),
      password: formData.get('password')
    }
    console.log(data);
  }

  return (
    <div className="Login">
      <div className="Login-container">
        <img src={logo} alt="logo" className="logo" />
        <form action="/" className="form" ref={form}>
          <div>
            <label htmlFor="email adress" className="label">
              Email address
            </label>
            <input
              type="text"
              name="email"
              placeholder="myemail@mydominio.com"
              className="input email-address"
            />
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="*********"
              className="input input-password"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="primary-button login-button">
              Log in
          </button>
          <a href="/">Forgot my password</a>
          <button
            className="secondary-button sign_up-button">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;