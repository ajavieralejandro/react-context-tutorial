import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';
import CartProvider from './providers/cart/cart.provider';
import ShopProvider from './providers/shop/shop.provider';
import './index.css';
import App from './App';
import DirectoryProvider from './providers/directory/directory.providers';

ReactDOM.render(
  <ShopProvider>
  <DirectoryProvider>
  <CartProvider>
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>
  </CartProvider>
  </DirectoryProvider>
  </ShopProvider>,
  document.getElementById('root')
);
