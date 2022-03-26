import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Youtube from './service/youtube';
import { BrowserRouter } from 'react-router-dom';

const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);
ReactDOM.render(
  <BrowserRouter>
    <App Youtube={youtube}/>
  </BrowserRouter>,
  document.getElementById('root')
);

