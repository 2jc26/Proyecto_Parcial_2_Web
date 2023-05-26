import Card from "react-bootstrap/Card";

const { useEffect, useState } = require("react");

function Cafe(prop) {
    // {!id ? (
    //     console.log('No hay id', id.id)
    //     ): (
    //       console.log('Hay id', id.id)
    //     )
    // }
    // const [cafe, setCafe] = useState([]);
    
    // useEffect(() => {
    //     const URL = `http://localhost:3001/cafes/${id.id}`;
    //     fetch(URL)
    //         .then((data) => data.json())
    //         .then((data) => {
    //             setCafe(data);
    //         });
    // }, []);
    

    return (
        <Card style={{ width: "18rem", height: "24rem" }} className="mb-3">
            <Card.Img
                style={{ height: "14rem" }}
                variant="top"
                src={prop.cafe.imagen}
                alt={prop.cafe.nombre}
            />
            <Card.Body>
                <Card.Title>
                    {prop.cafe.nombre}
                    <br/>
                    {prop.cafe.fecha_cultivo}
                </Card.Title>
                <Card.Text>
                    <p>Notas</p>
                    {prop.cafe.notas}
                    <p> Cultivado a una altura de {prop.cafe.altura} msnm</p>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Cafe;