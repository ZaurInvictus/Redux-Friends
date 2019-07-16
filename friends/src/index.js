import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import App from './App'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk  from 'redux-thunk'
import logger from 'redux-logger'
import { BrowserRouter as Route } from 'react-router-dom'
import rootReducer from './reducers'


const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
)

ReactDOM.render(
 <Provider store={store}>
   <Route>
     <App />
   </Route>
 </Provider>, 
 document.getElementById('root')
);

