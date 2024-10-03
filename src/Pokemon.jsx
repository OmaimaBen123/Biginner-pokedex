import React from 'react'

const Pokemon = ({ pokemon }) => {
    
    if (pokemon === null) return
    const name = pokemon.name;
    const image = pokemon.sprites.front_default;
    const types = pokemon.types.map(el => el.type.name)
    const typeString = types.join(',');



    return <>
        <div>
            <div>{name}</div>
            <img src={image} alt="pokemon" />
            <div>{ typeString}</div>
        </div>
    </>;
}

export default Pokemon
