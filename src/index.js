import store from './store.js';
import { addToCart, updateCart, deleteFromCart }  from './actions/cart-actions';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App.js';
/*let unsubscribe = store.subscribe(() => null);

store.dispatch(addToCart('Coffee 500gm', 1, 250));
store.dispatch(addToCart('Flour 1kg', 2, 110));
store.dispatch(addToCart('Juice 2L', 1, 250));
store.dispatch(updateCart('Flour 1kg', 7, 110));
store.dispatch(deleteFromCart('Coffee 500gm'));
unsubscribe();*/

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider> ,
  document.getElementById('root')
);