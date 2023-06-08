import React, { Fragment, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { v4 as uuid } from 'uuid';

const Formulario = ({agregarUsuario}) => {

    const [usuario, editarUsuario] = useState({
        email:"",
        name:""
    });

    const [error, setError] = useState(false);

    const {email, name} = usuario

    const handleChange = (e) => {
        editarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        });
    }

    const submitForm = (e) => {
        e.preventDefault();
        if(email.trim() === '' || name.trim() === '') { 
            setError(true);
            return;
        }
        setError(false);
        usuario.id = uuid();
        agregarUsuario(usuario);
        editarUsuario({email:'', name: ''});
    }

    return (
        <Fragment>
            <Form onSubmit={submitForm}>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        name="email"
                        onChange={handleChange}
                        value={email}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        type="name"
                        placeholder="name" 
                        name="name"
                        onChange={handleChange}
                        value={name}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            {
                error ? <h4> Completá el formulario antes de enviarlo</h4> : null
            }
        </Fragment>
    );
};

export default Formulario;