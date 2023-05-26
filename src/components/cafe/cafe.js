import Card from "react-bootstrap/Card";

const { useEffect, useState } = require("react");

function Cafe(id) {

    const [cafe, setCafe] = useState([]);
    
    useEffect(() => {
        const URL = `http://localhost:3001/cafes/${id}`;
        fetch(URL)
            .then((data) => data.json())
            .then((data) => {
                setCafe(data);
            });
    }, []);
    

    return (
        <Card style={{ width: "18rem", height: "24rem" }} className="mb-3">
            <Card.Img
                style={{ height: "14rem" }}
                variant="top"
                src={cafe.imagen}
                alt={cafe.nombre}
            />
            <Card.Body>
                <Card.Title>
                    {cafe.nombre}
                    <br/>
                    {cafe.fecha_cultivo}
                </Card.Title>
                <Card.Text>
                    <p>Notas</p>
                    {cafe.notas}
                    <p> Cultivado a una altura de {cafe.altura} msnm</p>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Cafe;