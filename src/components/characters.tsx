
import  {character} from '../interfaces/character'

interface Props {
    characters: character[]
}

export const HousesCharacters = ({characters}: Props) =>{
    return(
        <div>
            {characters.map((res:character)=>{
                return(
                <div>
                    <p>name: {res.name}</p>
                    <span>actor: {res.actor}</span>
                    
                </div>)
            })}
        </div>
    );

    }