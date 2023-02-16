import React from "react";
import DeckButtonCSS from "./DeckButton.module.scss";
import rock from "../../../../assets/icon-rock.svg";
import scissors from "../../../../assets/icon-scissors.svg";
import paper from "../../../assets/icon-paper.svg";


type Props = {
    handlePlayersValue: (value:string) => void;
    value: string;
    img: string;
}

const DeckButton = (({handlePlayersValue, value, img}: Props) => {

    return (
        <button 
            className={DeckButtonCSS.deck__weapon} 
            onClick={() => {
                handlePlayersValue(value);
            }}
        >
            <img src={img} width='96' height='96'/>
        </button>
    )
})

export default DeckButton;