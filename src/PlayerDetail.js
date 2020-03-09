import React from 'react';

//cirar componente
const PlayerDetail = (props) =>{
    return(
        <div>
            <h1>{props.nome}</h1>
            <h2>{props.idade}</h2>
            <h2>{props.altura}</h2>
            <h2>{props.nacionalidade}</h2>
        </div>
    );
}


//exportar um componente
export default PlayerDetail;