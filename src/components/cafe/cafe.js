import { useEffect, useState } from "react";

function Cafe(cafeId) {

    const [Cafe, setCafe] = useState({});

    useEffect(() => {
        const URL = `http://localhost:3001/cafes/${cafeId.cafeId}`;
        fetch(URL)
            .then((data) => data.json())
            .then((data) => {
                setCafe(data);
            });

    })

    return (
        <div className="card mb-3" style={{ width: "311px", backgroundColor: "#E0BBBB33", marginLeft: "2rem" }}>
            <strong className="card-title strong">
                {Cafe.nombre}
            </strong>
            <p class="card-text fecha">
                {Cafe.fecha_cultivo}
            </p>
            <div className="card-body">
                <img
                    style={{ width: "116px", height: "150px" }}
                    variant="top"
                    src={Cafe.imagen}
                    alt={Cafe.nombre}
                />
                <p class="card-text">
                    Notas
                    <br />
                    {Cafe.notas}
                </p>
                <strong class="card-text">
                    Cultivado a una altura de
                    <br />
                    {Cafe.altura} msnm
                </strong>
            </div>
        </div>
    );
}

export default Cafe;