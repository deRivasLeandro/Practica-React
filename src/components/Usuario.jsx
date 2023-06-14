import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge, Button } from 'react-bootstrap';

const Usuario = ({usuario, borrarUsuario}) => {
    return ( 
        <Fragment>
            <Badge variante="secondary">
                <p>Email: {usuario.email}</p>
                <p>Name: {usuario.name}</p>
                <Button 
                    variant="light"
                    onClick={ () => borrarUsuario(usuario.id) }
                >Borrar</Button>
            </Badge> 
        </Fragment>
     );
}
 
export default Usuario;