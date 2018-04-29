import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';

// Styled Component
import styled from 'styled-components';

// Navigation
import Header from './navigation/Header';
import Footer from './navigation/footer/Footer';

// Mobx Stores
import UiStore from './stores/UiStore';
import NavigationStore from './stores/NavigationStore';
import HomeStore from './stores/HomeStore';

// Routes
import HomePage from './pages/HomePage';
import BikePage from './pages/BikePage';
import EquipementsPage from './pages/EquipmentPage';
//import ProductPage from './pages/ProductPage';
import AccessoriesPage from './pages/AccessoriesPage';
import ShopPage from './pages/ShopPage';
import CheckoutPage from './pages/CheckoutPage';
import ErrorPage from './pages/ErrorPage';

const stores = {
  UiStore,
  NavigationStore,
  HomeStore
}

const ApplicationDivStyled = styled.div`
  margin : 0;
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
          <Route path="/equipment" component={EquipementsPage} />
          <Route path="/accessories" component={AccessoriesPage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route exact path="/" render={() => (<Redirect to="/home" />)} />
          <Route path="*" component={ErrorPage} />
        </Switch>
        <Footer />
      </ApplicationDivStyled>
      </BrowserRouter>
    </Provider>
  , document.getElementById('root'));
registerServiceWorker();
