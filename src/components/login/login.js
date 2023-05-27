import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import './login.css'

function Login() {
    const [nombre, setNombre] = useState('');
    const [password, setPassword] = useState('');
    const [fallo, setFallo] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (nombre.trim() === '' || password.trim() === '') {
            setFallo(true);
            setError("Campos vacios");
            return
        } else {
            let config = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "login":nombre, "password":password })
            }

            let res = await fetch('http://localhost:3001/login', config);
            let data = await res.json();
            console.log(data)
            if (data.status === 'success') {
                navigate("/cafes")
            } else {
                setFallo(true);
                setError("Error de autenticación. Revise sus credenciales");
                return
            }
        }
        setFallo(false);
    }

    return (

        <Row>
            <Col lg="2"></Col>
            <Col>
                <div className="contendor-formulario">
                    <p>Inicio de sesión</p>
                    <Form className="formulario" onSubmit={handleSubmit}>
                        <Form.Group className="formulario_texto">
                            <Form.Label>Nombre de usuario</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingresa tu nombre de usuario"
                                onChange={e => setNombre(e.target.value)}
                                value={nombre}
                            />
                        </Form.Group>
                        <Form.Group className="formulario_texto">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Contraseña"
                                onChange={e => setPassword(e.target.value)}
                                value={password}
                            />
                        </Form.Group>
                        <br />
                        <Button className="Iniciar" type="submit" style={{ backgroundColor:"#8FA98F", border: "0px", borderRadius: 0, color: "black", fontWeight: 'bold'}}>
                            Iniciar sesión
                        </Button>
                        <Button className="Cancelar" type="reset" style={{ backgroundColor:"#E75D5D", border: "0px", borderRadius: 0, color: "black", fontWeight: 'bold'}}>
                            Cancelar
                        </Button>
                        {fallo && <p className="error">{error}</p>}
                    </Form>
                </div>
            </Col>
            <Col lg="2"></Col>
        </Row>
    )
}

export default Login;
