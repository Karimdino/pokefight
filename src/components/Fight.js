import React, {  useEffect } from "react";
import { useState } from "react";
import { Card, Button } from 'react-bootstrap'



export default function fight() {
    const [pokedex, setPokedex] = useState([]);
    fetch('https://g2-pokemon-api.herokuapp.com/pokemon')
    .then(response => response.json())
    .then(data => console.log(data))
    return (
        <div>
          
            <button>
                fight
            </button>
        </div>
    )
}

