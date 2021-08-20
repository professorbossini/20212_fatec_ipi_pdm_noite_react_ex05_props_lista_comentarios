import React from 'react'

const Comentario = ({nome, texto, data, foto}) => {
    return (
        <div className="d-flex">
            <img src={foto} alt={nome}/>
            <div className="ms-2 p-0 position-relative">
                <h2 className="border-bottom">{nome}</h2>
                <p>{texto}</p>
                <p style={{fontSize: '0.8rem'}} className="text-muted position-absolute bottom-0 start-0 m-0">{data}</p>
            </div>
        </div>
    )
}


export default Comentario

