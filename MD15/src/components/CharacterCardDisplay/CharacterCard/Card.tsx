import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { CharacterType } from "../../../api/api";
import "./card.scss"


type Props = {
    character: CharacterType
}

const Card = (({character}: Props) =>{

    return(
        <div className="character__box">
            <img src={character.image} />

            <span className="text__wrapper">
                <h2>
                    {character.name}
                </h2>

                <span className="indicator__wrapper">
                    <span className={`indicator pulse ${character.status}`}></span>
                    <p>
                        {character.status} - {character.species}
                    </p>
                </span>

                <h3>
                    Last known location:
                </h3>
            <p className="txt">
                {character.location.name}
            </p>

            <h3>
                First seen in:
            </h3>
            <p className="txt">
                {character.origin.name}
            </p>
            <p>ID:{character.id}</p>
            </span>
        </div>
    )
})

export default Card;