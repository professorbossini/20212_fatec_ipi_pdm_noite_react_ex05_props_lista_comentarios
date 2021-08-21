import React from 'react'

const ListaComentarios = (props) => {
    return (
        <div className={estilos.principal}>
            {props.children}
        </div>
    )
}

const estilos = {
    principal: 'container border border-warning rounded mt-3 p-3'
}

export default ListaComentarios
