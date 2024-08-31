import './App.css';
import NavBar from './components/NaviBar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';
import About from './pages/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className='wrapper'>
      <div>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/users" element={<Users/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
