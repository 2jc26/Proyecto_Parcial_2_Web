import { Col, Container, Row, Table } from "react-bootstrap";
const { useEffect, useState } = require("react");

function Cafes({ setCafeDetail }) {
    const [cafes, setCafes] = useState([]);
    const [Cafe, setCafe] = useState([]);
    useEffect(() => {
        const URL =
            "http://localhost:3001/cafes";
        fetch(URL)
            .then((data) => data.json())
            .then((data) => {
                setCafes(data);
            });
    }, []);

    const handleRowClick = (id) => {
        const URL = `http://localhost:3001/cafes/${id}`;
        fetch(URL)
            .then((data) => data.json())
            .then((data) => {
                setCafe(data);
            });
        setCafeDetail(Cafe);
    }

    return (
        <Container>
            <Row>
                <Col lg="8">
                    <Table className="tabla">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nombre</th>
                                <th>Tipo</th>
                                <th>Región</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cafes.map((item) => (
                                <tr key={item.id} onClick={() => handleRowClick(item.id)}>
                                    <td>{item.id}</td>
                                    <td>{item.nombre}</td>
                                    <td>{item.tipo}</td>
                                    <td>{item.region}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
                <Col>
                
                </Col>
            </Row>
        </Container>
    );
}

export default Cafes;