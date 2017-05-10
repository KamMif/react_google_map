import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import star from '../public/star.png';
import staring from '../public/staring.png';

ReactDOM.render(
  <div className="wrapper">
    <App />
    <div className="refresh">
    </div>
    <form className="forms" action="">
      <input type="text" className="text"/>
    </form>
    <div className="sub-form"></div>
    <div className="wrap_slide">
      <div className="one">
        <p>1</p>
      </div>
      <div className="three">
        <p>3</p>
      </div>
      <img src={staring} className="staring" alt=""/>
      <div className="block block1"></div>
      <div className="block block2"></div>
      <div className="block block3"></div>
    </div>
    <div className="bc-wrap">
      <div className="bc-1">
      <div className="bc-2">
        <div className="bc-3">
          <div className="block_any"></div>
        </div>
      </div>
    </div>
    </div>
    <div className="footer">
      <div className="bf bf-1">
        <img className="img_message" src={star} alt="icon"/>
      </div>
      <div className="bf bf-2"></div>
      <div className="bf bf-3"></div>
    </div>
  </div>,
  document.getElementById('root')
);
