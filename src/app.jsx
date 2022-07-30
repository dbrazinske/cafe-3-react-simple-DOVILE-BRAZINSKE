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
import ServiceOrderPage from './pages/service-order-page';
import ErrorPage from './pages/error-page';
import ProductsPage from './pages/products-page';
import CartPage from './pages/cart-page';
import CartContext from './contexts/cart-context';

const App = () => {
  const [cartItems, setCartItems] = React.useState([]);
  const cartContextValue = React.useMemo(() => ({
    cartItems,
    addToCart: (item) => setCartItems([...cartItems, item]),
  }), [cartItems]);

  return (
    <BrowserRouter>
      <CartContext.Provider value={cartContextValue}>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/service-order" element={<ServiceOrderPage />} />
          <Route path="/cart" element={<CartPage />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  );
};

export default App;
