import React from 'react';
import './App.css';
import Navbar from './componentes/estaticos/navbar/Navbar';
import Footer from './componentes/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import Cadastro from "./paginas/cadastro/Cadastro"
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ListaTema from './componentes/temas/listaTema/ListaTema'
import ListaPostagem from './componentes/postagens/listaPostagem/ListaPostagem';

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
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/temas" element={<ListaTema />} />
          <Route path="/posts" element={<ListaPostagem />} />

        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
