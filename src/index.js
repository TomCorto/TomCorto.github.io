import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';

// Navigation
import Header from './navigation/Header';

// Routes
import HomePage from './pages/HomePage';
import BikePage from './pages/BikePage';
import EquipementsPage from './pages/EquipmentPage';
import ProductPage from './pages/ProductPage';
import AccessoriesPage from './pages/AccessoriesPage';
import ShopPage from './pages/ShopPage';
import CheckoutPage from './pages/CheckoutPage';
import ErrorPage from './pages/ErrorPage';

const stores = {

}


ReactDOM.render(
  <Provider {...stores}>
    <BrowserRouter>
      <main>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/bikes" component={BikePage} />
          <Route path="/equipment" component={EquipementsPage} />
          <Route path="/accessories" component={AccessoriesPage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route exact path="/" render={() => (<Redirect to="/home" />)} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </main>
      </BrowserRouter>
    </Provider>
  , document.getElementById('root'));
registerServiceWorker();
