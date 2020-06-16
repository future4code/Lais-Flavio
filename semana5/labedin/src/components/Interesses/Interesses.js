import React from 'react'
import  './Interesses.css'

function Interesses(props) {
  return (
    <div className="interesses-container">
      <div>
        <h4>{props.empresaInteresse1}</h4>
        <h4>{props.empresaInteresse2}</h4>
        <h4>{props.empresaInteresse3}</h4>
        <p>{props.descricao}</p>
      </div>
    </div>
  )
}

export default Interesses