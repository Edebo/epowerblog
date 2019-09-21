import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {createStore,applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
// import {loadPosts} from './action'

const store =   createStore(rootReducer,applyMiddleware(thunk));

store.subscribe(()=>{
    console.log('store:',store.getState())
})

// store.dispatch(loadPosts(1))


ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

