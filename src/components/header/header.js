import './header.css'

function Encabezado() {
    return (
        <div className="header">
            <h1 className='texto'>El aroma mágico</h1>
            <hr />
            <img className="imagenEncabezado" src="https://cdn.discordapp.com/attachments/1106582725000966205/1111741198986649661/image_1.png" alt="cafe" />
            <hr />
        </div>
    );
}

export default Encabezado;