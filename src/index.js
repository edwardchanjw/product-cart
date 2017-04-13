import React from 'react'
import { render } from 'react-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import reducer from './reducers'
import { getAllItems } from './actions'

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'


import App from './containers/App'
import 'bootstrap/dist/css/bootstrap.css';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = [ thunk, routerMiddleware(history)];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}
// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

store.dispatch(getAllItems())


render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
    <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
