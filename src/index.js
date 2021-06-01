import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Route } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.10.0";

import store from './store/store'
import Home from './views/Home';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.Fragment>
        <Route exact path='/ginkgo-app' component={Home} />
      </React.Fragment>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

