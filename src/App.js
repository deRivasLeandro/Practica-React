import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Section1 from './components/Section1';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { Fragment, useEffect, useState } from 'react';
import Formulario from './components/Formulario';
import Usuario from './components/Usuario';

function App() {

  //INICIAMOS EL LOCAL STORAGE
  let clientesGuardados = JSON.parse(localStorage.getItem('usuarios'));
  if(!clientesGuardados) { clientesGuardados = []}

  //HOOK USE STATE
  const [usuarios, editarUsuarios] = useState(clientesGuardados);

  //HOOK USE EFFECT: Sirve para ejecutar un bloque de codigo al haber algun cambio.
  useEffect( () => {
    clientesGuardados ? localStorage.setItem('usuarios', JSON.stringify(usuarios)) : localStorage.setItem('usuarios', JSON.stringify([]))
  }, [clientesGuardados]);

  const agregarUsuario = (usuario) => {
    editarUsuarios([
      ...usuarios,
      usuario
    ])
  }

  const borrarUsuario = (id) => {
    const nuevosUsuarios = usuarios.filter(cliente => cliente.id !== id);
    editarUsuarios(nuevosUsuarios);
  }

  return (
    <div className="App">
      <Header/>
      <Section1/>
      <Fragment>
        <Container>
          <Row>
            <Col><h1>Virbela</h1></Col>
          </Row>
          <Row>
            <Col><Formulario
              agregarUsuario = {agregarUsuario}  
            /></Col>
            <Col>
              {
                usuarios.length > 0 ? 
                  <h3>Listado de usuarios</h3> 
                  : 
                  <h3>No hay usuarios</h3>
              }
              {
                usuarios.map(usuario => 
                  <Usuario 
                    usuario = {usuario}
                    key = {usuario.id}
                    borrarUsuario = {borrarUsuario}
                  />)
              }
            </Col>
            <Col>Evento 3</Col>
          </Row>
        </Container>
      </Fragment>
      <Footer/>     
    </div>
  );
}

export default App;
