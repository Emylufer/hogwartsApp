import  React, { useState }  from 'react';
import  { StaffCharacters } from '../components/characters';
import { character } from '../interfaces/character';


const httpRequest = 'http://hp-api.herokuapp.com/api/characters/';

interface Props {
    staff:string
}



export const GetStaff =({staff}: Props) =>{
    const [characters, setCharacters] = useState<character[]>([])
    
    // console.log('hola soy getStaff');
    
    fetch(httpRequest+'staff/'+ staff)
        .then( response => {
            return response.json() 
        })
        .then( res => {
            // console.log(res)
           setCharacters(res)
        });


        return(
            <StaffCharacters characters={characters}/>

        )
        
 }   