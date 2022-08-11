import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default function PokemonCardDetail({pokemonDetails}) {
  
  const {id : pokemonId, name, type, base} = pokemonDetails
  

  return (
    <div>
      <Card className='pokemonCardDetails'>
        <Card.Img variant="top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`} />
        <Card.Body>
          <Card.Title>{name?.english}</Card.Title>
          <Card.Text>
            <p>Type: {type}</p>
            <p>Base: HP: {base?.HP} Attack: {base?.Attack} Defense: {base?.Defense} Speed: {base?.Speed}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}
