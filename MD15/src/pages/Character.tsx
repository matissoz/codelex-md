import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { CharacterType, getChar } from "../api/api";
import Card from "../components/CharacterCardDisplay/CharacterCard/Card";

type Props = {
    maxCharacters: number;
    idClick?: number;
}

const Character = (( {maxCharacters, idClick}: Props ) =>{

    const { id } = useParams();
    const currentID = Number(id);

    const charQuery = useQuery({
        queryKey: ['char', id],
        queryFn: () => getChar(id),
        keepPreviousData: true,
    });

    
    if(currentID > maxCharacters) return <div>Character out of range...</div>;    
    if(charQuery.isLoading) return <div>Loading..</div>;
    if(charQuery.isError) return <div>Loading..</div>;
    

    const character: CharacterType = charQuery.data;

    return(
        <div>
            <Card character={character}/>
        </div>
    )
})

export default Character;