import { Table } from "react-bootstrap";
const { useEffect, useState } = require("react");

function Cafes({ setId }) {
    const [cafes, setCafes] = useState([]);
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
        setId(id);
    }

    return (
        <Table striped bordered hover>
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
    );
}

export default Cafes;