import React from 'react'

export default function ContenedorHijo (props) {
    return (
        <div>
        <p>---------Inicio de Espacio Publicitario---------</p>
            {props.children}
        <p>-----------Fin de Espacio Publicitario----------</p>
        </div>
    )
}