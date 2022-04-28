import React from "react";
import '@styles/CreateAccount.scss'

const CreateAccount = () => {
  return (
    <div className="CreateAccount">
      <div className="CreateAccount-container">
        <h1 className="title">My account</h1>
        <form action="/" className="form">
          <div>
            <label htmlFor="name" className="label">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Juan Perez"
              className="input input-name"/>
            <label htmlFor="email adress" className="label">
              Email address
            </label>
            <input
              type="email"
              id="email_address"
              placeholder="myemail@mydominio.com"
              className="input email-address"/>
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="*********"
              className="input input-password"/>
          </div>
          <input
            type="submit"
            value="Create"
            className="primary-button login-button"/>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
