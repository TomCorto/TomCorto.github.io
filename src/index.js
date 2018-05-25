import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';

// Styled Component
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';

// Navigation
import Header from './navigation/Header';
import Footer from './navigation/footer/Footer';

// Mobx Stores
import UiStore from './stores/UiStore';
import NavigationStore from './stores/NavigationStore';
import HomeStore from './stores/HomeStore';
import BikeStore from './stores/BikeStore';
import ProductStore from './stores/ProductStore';
import ProductUI from './stores//ProductUI';

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
  UiStore,
  NavigationStore,
  HomeStore,
  BikeStore,
  ProductStore,
  ProductUI
}

const ApplicationDivStyled = styled.div`
  @media all and (max-width: 1024px) { margin: 3em 0 0 0; }
  @media all and (min-width: 1024px) { margin: 3.75em 0 0 0; }
  padding: 0;
`

ReactDOM.render(
  <Provider {...stores}>
    <BrowserRouter>
      <ApplicationDivStyled>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/bikes" component={BikePage} />
          <Route path="/product" component={ProductPage} />
          <Route path="/equipment" component={EquipementsPage} />
          <Route path="/accessories" component={AccessoriesPage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route exact path="/" render={() => (<Redirect to="/home" />)} />
          <Route path="*" component={ErrorPage} />
        </Switch>
        <Footer/>
      </ApplicationDivStyled>
      </BrowserRouter>
    </Provider>
  , document.getElementById('root'));
registerServiceWorker();
