import React from 'react';
import '@styles/MyAccount.scss';

const MyAccount = () => {
  return (
    <div className="MyAccount">
      <div className="MyAccount-container">
        <h1 className="title">My account</h1>
        <form action="/" className="form">
          <div>
            <label htmlFor="name" className="label">
              Name
            </label>
            <p className="value">Juan Perez</p>
            <label htmlFor="email adress" className="label">
              Email address
            </label>
            <p className="value">juanperez@gmail.com</p>
            <label htmlFor="password" className="label">
              Password
            </label>
            <p className="value">*********</p>
          </div>
          <input type="submit" value="Edit" className="secondary-button edit-button"/>
        </form>
      </div>
    </div>
  );
}

export default MyAccount;