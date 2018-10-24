import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { store } from './redux/store'
import App from './components/App';
import 'antd/dist/antd.css';
import './index.css';

render(
  <Provider store={ store }>
    <App />
  </Provider>,
 document.getElementById('root')
);