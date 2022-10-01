import React from 'react';
import './App.css';
import Navbar from './componentes/estaticos/navbar/Navbar';
import Footer from './componentes/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import {BrowserRouter, Route, Routes} from 'react-router-dom';



function App() 
{
  return (
    <BrowserRouter>
      <Navbar />

      <div style={{minHeight:"100vh"}}>
        <Routes> {/* Antigo Switch */}
          <Route path="/" element={<Login />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        {/*  <Route path="/cadastro" element={<CadastroUsuario />} /> */}
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
