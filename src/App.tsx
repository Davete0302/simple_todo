import React from 'react';
import './App.css';
import MainNavigation from './Screens/Navigation/MainNav';
import PrivacyPolicy from './Screens/Pages/PrivacyPolicy';
import Tos from './Screens/Pages/Tos';
import Todo from './Screens/Pages/Todo/Todo';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (

    <BrowserRouter>
    <MainNavigation/>
    <Routes>
      <Route path="/" element={<Todo />}/>
      <Route path="/termsandconditions" element={<Tos />} />
      <Route path="/privacyandpolicy" element={<PrivacyPolicy />} />
   
        
    </Routes>
  </BrowserRouter>
  );
}

export default App;
