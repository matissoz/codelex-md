import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { CharacterType } from "../../api/api";
import Card from "./CharacterCard/Card";
import './cardDisplay.css'

type Props = {
    characters: CharacterType[];
}

const CardDisplay = (({characters}: Props) =>{

    return(
    <div className="card__display">
        {characters.map((char, i) => <Card character={char} key={i}/>)}
    </div>
    )
})

export default CardDisplay;