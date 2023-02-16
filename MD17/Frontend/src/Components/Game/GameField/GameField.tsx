import React, { useEffect, useState } from "react";
import GameFieldCSS from "./GameField.module.scss";
import close from "../../../assets/icon-close.svg";
import rules from "../../../assets/image-rules.svg";
import FieldWindow from "./FieldWindow/FieldWindow";
import { drawRobotsValue } from "../gamelogic";


type Props ={
    playersValue: string;
    robotValue: string;
    result: string | undefined;
}

const GameField = (({playersValue, robotValue, result}: Props) => {

    return (
        <div className={`${GameFieldCSS.field}`}>
            <FieldWindow value={playersValue} result={result}/>
            <FieldWindow value={robotValue} result={result}/>
        </div>
    )
})

export default GameField;