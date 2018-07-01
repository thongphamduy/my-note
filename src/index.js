import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import rootReducer from './reducers';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())); // eslint-disable-line
store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState())); // eslint-disable-line
});
ReactDOM.render(<Provider store={store}>
    <App/>
  </Provider>, document.getElementById('root')); // eslint-disable-line
// registerServiceWorker();
