import { Route, Routes } from 'react-router-dom';


import './css/App.css'
import Home from './pages/Home';
import Favorite from './pages/Favorite';
import NavBar from './components/NavBar';

function App() {
  const movieNumber = 1;
  return (
  <div>

    <NavBar></NavBar>

    <main className="main-content">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/favorites' element={<Favorite></Favorite>} ></Route>
      </Routes>
    </main>  
  </div>
  );
}


export default App
