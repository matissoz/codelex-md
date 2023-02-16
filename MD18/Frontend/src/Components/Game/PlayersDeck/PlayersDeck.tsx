import React from "react";
import PlayersDeckCSS from "./PlayersDeck.module.scss";
import rock from "../../../assets/icon-rock.svg";
import scissors from "../../../assets/icon-scissors.svg";
import paper from "../../../assets/icon-paper.svg";
import DeckButton from "./DeckButtons/DeckButton";

type Props = {
    handlePlayersValue: (value:string) => void;
}
const PlayersDeck = (({handlePlayersValue}: Props) => {

    return (
        <>
            <div className={PlayersDeckCSS.deck}>
                <DeckButton 
                    handlePlayersValue ={handlePlayersValue}
                    value = "rock"
                    img={rock}
                />

                <DeckButton 
                    handlePlayersValue ={handlePlayersValue}
                    value = "paper"
                    img={paper}
                />

                <DeckButton 
                    handlePlayersValue ={handlePlayersValue}
                    value = "scissors"
                    img={scissors}
                />
            </div>
        </>
    )
})

export default PlayersDeck;