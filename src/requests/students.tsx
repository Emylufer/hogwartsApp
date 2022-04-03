import  React, { useState }  from 'react';
import { StudentsCharacters  } from '../components/characters';
import { character } from '../interfaces/character';


const httpRequest = 'http://hp-api.herokuapp.com/api/characters/';

interface Props {
    student:string
}



export const GetStudents =({student}: Props) =>{
    const [characters, setCharacters] = useState<character[]>([])
    
    // console.log('hola soy getstudents');
    
    fetch(httpRequest+'student/'+ student)
        .then( response => {
            return response.json() 
        })
        .then( res => {
            // console.log(res)
           setCharacters(res)
        });


        return(
            <StudentsCharacters characters={characters}/>
         )
 }   




