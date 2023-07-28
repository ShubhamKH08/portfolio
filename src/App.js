import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import { Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='app-container'>
      <Router>
        <Routes>
    <Route path='/'element={<Home/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;


