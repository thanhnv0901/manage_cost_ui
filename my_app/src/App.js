import './App.css';
import Header from './components/header/Header';
import { Fragment } from 'react';
import Warp from './components/layout/Warp';
import { Routes, Route, Navigate } from 'react-router-dom'
import CalculatePage from './pages/CalculatePage';
import CenterColumn from './components/Calculate/CenterColumn.js'

function App() {
  return (
    <Fragment>
      <Warp>
        <Routes>
          <Route path='/*' element={<Navigate to="/projects" />}></Route>
          <Route path='/projects' element={<CalculatePage />}>
            <Route path=":id" element={
              <Fragment>
                <CenterColumn></CenterColumn>
              </Fragment>
            }>
            </Route>

          </Route>

        </Routes>
      </Warp>
    </Fragment>
  );
}

export default App;
