import React from 'react';
import '@styles/NotFound.scss';

const NotFound = () => {
  return (
    <div className="container-notfound">
      <div className="avatar">
        <div className="right-hear">
          <div className="right-hear-details"></div>
        </div>
        <div className="left-hear">
        <div className="left-hear-details"></div>
        </div>
        <div className="head">
          <div className="eyes-right"></div>
          <div className="eyes-left"></div>
          <div className="tough"></div>
        </div>
      </div>
      <div className="menssage">
        <p>I'm so sorry, I can't found that, please tray again</p>
      </div>
      <section className="loader">
        <div></div>
        <div></div>
        <div></div>
      </section>
    </div>
  );
}

export default NotFound;