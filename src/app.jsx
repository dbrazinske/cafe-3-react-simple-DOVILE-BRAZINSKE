import * as React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Navbar from './components/navbar';

import HomePage from './pages/home-page';
import ServicesPage from './pages/services-page';
import ContactsPage from './pages/contacts-page';
import ErrorPage from './pages/error-page';


const App = () => (
  <BrowserRouter>
    <Navbar />

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services-page" element={<ServicesPage />} />
      <Route path="/contacts-page" element={<ContactsPage />} />

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
