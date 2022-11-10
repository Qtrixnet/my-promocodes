import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./componens/app/app";
import {Provider} from "react-redux";
import store from "./services/store";

const root = ReactDOM.createRoot(document.getElementById('my-coupons'));
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);
