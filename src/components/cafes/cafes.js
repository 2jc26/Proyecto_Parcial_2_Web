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
        setCafeDetail([Cafe]);
    }

    return (
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
    );
}

export default Cafes;