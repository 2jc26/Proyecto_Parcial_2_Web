import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

function Login() {
    const [nombre, setNombre] = useState('');
    const [password, setPassword] = useState('');
    const [fallo, setFallo] = useState(false);
    const [error, setError] = useState('');
    const [rol, setRol] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (nombre.trim() === '' || password.trim() === '') {
            setFallo(true);
        } else {
            let config = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nombre, password })
            }

            let res = await fetch('http://localhost:3001/login', config);
            let data = await res.json();
            if (data.status === 'success') {
                setRol("admin");
            } else {
                setFallo(true);
            }
            setError(data.message);
        }
        setFallo(false);
        setError("Campos vacios");
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Nombre de usuario</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingresa tu nombre de usuario"
                                onChange={e => setNombre(e.target.value)}
                                value={this.nombre}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Contraseña"
                                onChange={e => setPassword(e.target.value)}
                                value={this.password}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Iniciar sesión
                        </Button>
                        <Button variant="primary" type="reset">
                            Cancelar
                        </Button>
                    </Form>
                    {fallo && <p className="alert alert-danger">{error}</p>}
                </Col>
            </Row>
        </Container>
    )
}

export default Login;
