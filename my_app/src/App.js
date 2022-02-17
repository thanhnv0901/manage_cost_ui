import './App.css';
import Header from './components/header/Header';
import { Fragment } from 'react';
import Warp from './components/layout/Warp';
import { Routes, Route } from 'react-router-dom'
import CalculatePage from './pages/CalculatePage';


function App() {
  return (
    <Fragment>
      <Warp>
        <Routes>
          {/* <Route path='/' element={<Header />} /> */}
          <Route path='/projects/*' element={<CalculatePage />} />


        </Routes>
      </Warp>
    </Fragment>
  );
}

export default App;
