import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import {FormattedDate} from 'react-intl';

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
                <FormattedDate
                    value={new Date(Cafe.fecha_cultivo)}
                    year='numeric'
                    month='numeric'
                    day='numeric'
                />
            </p>
            <div className="card-body">
                <img
                    style={{ width: "116px", height: "150px" }}
                    variant="top"
                    src={Cafe.imagen}
                    alt={Cafe.nombre}
                />
                <p class="card-text">
                    <FormattedMessage id="Notas"/>
                </p>
                <p class="card-text">
                    {Cafe.notas}
                </p>
                <strong class="card-text">
                    <FormattedMessage id="Cultivado"/>
                </strong>
                <br />
                <strong class="card-text">
                    {Cafe.altura}
                </strong>{" "}
                <strong class="card-text">
                    <FormattedMessage id="msnm"/>
                </strong>
            </div>
        </div>
    );
}

export default Cafe;