import './App.css';
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import HomeAdmin from './Components/HomeAdmin';
import HomeGuest from './Components/HomeGuest';
import HomeResponsable from './Components/HomeResponsable';
import Service from './Components/Service';
import Localisation from './Components/Localisation';
import Login from './Components/Login';
import Ressource from './Components/Ressource';

const App = () =>(
  <div className="App">
    <Routes>
      <Route path="/Login"  element={<Login />}/>
      <Route path="/HomeAdmin"  element={<HomeAdmin />}/>
      <Route path="/HomeRespo"  element={<HomeResponsable />}/>
      <Route path="/"  element={<HomeGuest />}/>
      <Route path="/Service" element={<Service />} />
      <Route path="/Localisation" element={<Localisation />} />
      <Route path="/Ressource/:nom/:localisation/:id" element={<Ressource/>} />
    </Routes>
    <Footer />
  </div>
)

export default App;
