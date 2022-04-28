import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../pages/Login';
import CreateAccount from '../pages/CreateAccount';
import Checkout from '../pages/Checkout';
import PasswordRecovery from '../pages/PasswordRecovery';
import Home from '../pages/Home';
import MyAccount from '../pages/MyAccount';
import NewPassword from '../pages/NewPassword';
import Orders from '../pages/Orders';
import SendEmail from '../pages/SendEmail';
import NotFound from '../pages/NotFound';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import '@styles/global.css';

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route extact path="/login" element={<Login />} />
            <Route exact path="singup" element={<CreateAccount />} />
            <Route exact path="checkout" element={<Checkout />} />
            <Route exact path="account" element={<MyAccount />} />
            <Route exact path="change-password" element={<NewPassword />} />
            <Route exact path="orders" element={<Orders />} />
            <Route exact path="/recovery-password" element={<PasswordRecovery />} />
            <Route exact path="/send-email" element={<SendEmail />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;