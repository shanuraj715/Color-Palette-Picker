import './App.css';
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'

import Home from './Pages/Home/Home'
import ColorPalette from './Pages/ColorPalette/ColorPalette';
import ContactUs from './Pages/ContactUs/ContactUs'
import Error404 from './Pages/Error404/Error404'
import ThemeToggle from './components/ThemeToggle/ThemeToggle';

function App() {
  return (
    <BrowserRouter basename='/'>
      <Layout>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/palette/:paletteName" exact element={<ColorPalette />} />
          <Route path="/contactUs" exact element={<ContactUs />} />
          <Route path="*" exact element={<Error404 />} />
        </Routes>
        <ThemeToggle />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
