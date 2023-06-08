import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Section1 from './components/Section1';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { Fragment, useState } from 'react';
import Formulario from './components/Formulario';

function App() {

  const [usuarios, editarUsuarios] = useState([]);

  const agregarUsuario = async (usuario) => {
    await editarUsuarios([
      ...usuarios,
      usuario
    ])
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
            <Col>Evento 2</Col>
            <Col>Evento 3</Col>
          </Row>
        </Container>
      </Fragment>
      <Footer/>     
    </div>
  );
}

export default App;
