import React from 'react'

export default function ContenedorPadre (props) {
    return (
        <div>
        <p><b>Bienvenido: </b>{props.nombre} </p>
        <p><b>Pagina de Inicio:</b> {props.nombrePagina}</p>
        </div>
    )
}