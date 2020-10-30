import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/reduxStore';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// <React.StrictMode>
//<App />
//</React.StrictMode> //так было

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();

