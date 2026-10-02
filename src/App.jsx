import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SmoothScrollProvider } from './animations/gsap/SmoothScrollProvider';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Products } from './pages/Products/Products';
import { ProductDetails } from './pages/ProductDetails/ProductDetails';
import { Contact } from './pages/Contact/Contact';
import { NotFound } from './pages/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <SmoothScrollProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:slug" element={<ProductDetails />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </SmoothScrollProvider>
    </BrowserRouter>
  );
}

export default App;
