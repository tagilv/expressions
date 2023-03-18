import React from 'react';
import './App.css';
import {AllExpressions} from './components/AllExpressions';
// import Home from './views/Home';
import {
  Route,
  Routes,
} from "react-router-dom";
import Home from './views/Home';
import Navigation from './components/Navigation';
import NoMatch from './views/NoMatch';
import Details from './views/Details';

function App() {

  return (
    <div className="App">
          <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:expression" element={<Details />} />
        <Route path="*" element={ <NoMatch/>} />
        {/* <Home/> */}
      </Routes>
    </div>
  );
}

export default App;
