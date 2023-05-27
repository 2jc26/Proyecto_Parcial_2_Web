import { Col, Row } from 'react-bootstrap';
import Cafe from '../cafe/cafe';
const { useEffect, useState } = require("react");

function Cafes() {
    
    const [cafes, setCafes] = useState([]);
    const [cofeeId, setId] = useState(undefined)

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
        if (cofeeId === id) {
            setId(undefined);
        } else {
            setId(id);
        }
    }

    const mostrarDetalle = () => {
        if (cofeeId!== undefined) {
            return <Cafe cafeId={cofeeId} />
        } else {
            return null
        }
    }

    return (
        <Row>
            <Col lg="8">
                <table className="table">
                    <thead class="table-dark">
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
                </table>
            </Col>
            <Col lg="4">
                {mostrarDetalle()}
            </Col>
        </Row>
    );
}

export default Cafes;