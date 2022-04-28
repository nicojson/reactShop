import React from 'react';
import '@styles/PasswordRecovery.scss';

import logo from '@logos/logo_yard_sale.svg';

const PasswordRecovery = () => {
  return (
    <div className="PasswordRecovery">
      <div className="PasswordRecovery-container">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="title">Password recovery</h1>
        <p className="subtitle">
          Inform the email address used to create your account
        </p>
        <form action="/" className="form">
          <div>
            <label htmlFor="email adress" className="label">
              Email address
            </label>
            <input type="email" id="email_address" placeholder="myemail@mydominio.com" className="input email-address" />
          </div>
          <input type="submit" value="Submit" className="primary-button login-button" />
          <a href="/">Back to log in</a>
        </form>
      </div>
    </div>
  );
}

export default PasswordRecovery;