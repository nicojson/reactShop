import React from 'react';
import '@styles/NewPassword.scss';

import logo from '@logos/logo_yard_sale.svg'

const NewPassword = () => {
  return (
    <div className="NewPassword">
      <div className="NewPassword-container">
        <img
          src={logo} alt="logo" className="logo"/>
        <h1 className="title">Create a new password</h1>
        <p className="subtitle">Enter a new password for you account</p>
        <form action="/" className="form">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input type="password" id="password" placeholder="*********" className="input input-password"/>
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="new-password"
            id="new-password"
            placeholder="*********"
            className="input input-password"/>
          <input
            type="submit"
            value={"Confirm"}
            className="primary-button login-button"/>
        </form>
      </div>
    </div>
  );
}

export default NewPassword;