import * as React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import { Navbar } from './components';

import HomePage from './pages/home-page';
import ServicesPage from './pages/services-page';
import ContactsPage from './pages/contacts-page';
import OrderPage from './pages/order-page';
import ErrorPage from './pages/error-page';

const App = () => (
  <BrowserRouter>
    <Navbar />

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="/order" element={<OrderPage />} />

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
