import './App.css';
import Header from './components/header/Header';
import { Fragment } from 'react';
import Warp from './components/layout/Warp';
import LeftColumn from './components/Calculate/LeftColumn';
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <Fragment>
      <Header></Header>
      <Warp>
        <Routes>
          <Route path='/'>
            <LeftColumn></LeftColumn>

          </Route>
        </Routes>
      </Warp>

    </Fragment>
  );
}

export default App;
