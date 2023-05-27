function Cafe(cafe) {

    return (
        <div className="card mb-3" style={{ width: "311px", backgroundColor: "#E0BBBB33", marginLeft: "2rem" }}>
            <strong className="card-title strong">
                {cafe.cafe.nombre}
            </strong>
            <p class="card-text fecha">
                {cafe.cafe.fecha_cultivo}
            </p>
            <div className="card-body">
                <img
                    style={{ width: "116px", height: "150px" }}
                    variant="top"
                    src={cafe.cafe.imagen}
                    alt={cafe.cafe.nombre}
                />
                <p class="card-text">
                    Notas
                    <br />
                    {cafe.cafe.notas}
                </p>
                <strong class="card-text">
                    Cultivado a una altura de
                    <br />
                    {cafe.cafe.altura} msnm
                </strong>
            </div>
        </div>
    );
}

export default Cafe;