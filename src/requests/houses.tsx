import  React, { useState }  from 'react';
import { HousesCharacters } from '../components/characters';
import { character } from '../interfaces/character';


const httpRequest = 'http://hp-api.herokuapp.com/api/characters/';

interface Props {
    house:string
}



export const GetHouses =({house}: Props) =>{
    const [characters, setCharacters] = useState<character[]>([])
    
    // console.log('hola soy gethouses');
    
    fetch(httpRequest+'house/'+house)
        .then( response => {
            return response.json() 
        })
        .then( res => {
            // console.log(res)
           setCharacters(res)
        });


        return(
            <HousesCharacters characters={characters}/>
         )
 }   


