import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Cart from './components/Cart';
import Home from './components/Home';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
