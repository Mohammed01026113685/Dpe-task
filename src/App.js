import './App.css';
import Nav from './Componant/Nav';
import ROR from './Componant/Ror';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductDetails from './Componant/ProductDetails';
import Login from './Componant/login';
function App() {
  
  return (
  <>
  <Router>
      <Nav/>
      <ROR/>
        <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/products/:id" element={<ProductDetails/>} />
        </Routes>
        </Router>
  </>
  );
}

export default App;
