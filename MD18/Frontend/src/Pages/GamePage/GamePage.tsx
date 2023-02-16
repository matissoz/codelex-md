import React, { useEffect, useState } from "react";
import GamePageCSS from "./GamePage.module.scss";
import rules from "../../assets/image-rules.svg";
import PlayersDeck from "../../Components/Game/PlayersDeck/PlayersDeck";
import GameField from "../../Components/Game/GameField/GameField";
import { drawRobotsValue, getWinner } from "../../Components/Game/gamelogic";
import DecisionScreen from "../../Components/Game/DecisionScreen/DecisionScreen";
import ScoreScreen from "../../Components/Game/ScoreScreen/ScoreScreen";
import { useMutation } from "@tanstack/react-query";
import { addScore } from "../../api/api";
import { useTranslation } from "react-i18next";

const GamePage = (() => {
    
    const [playersValue, setPlayersValue] = useState('');
    const [robotValue, setRobotValue] = useState('');
    const [playersName, setPlayersName] = useState('');
    const [scoreValue, setScoreValue] = useState(0);
    const [winner, setWinnder] = useState("Let's Play");

    const handleScore = ((value: string) =>{
        if(value == "Win"){
            setScoreValue(scoreValue+1)
        }

        if(value == "Lost"){
            setScoreValue(scoreValue-1)
        }
    })

    
    const handlePlayersValue = ((value:string) =>{
        setPlayersValue(value);
        setRobotValue(drawRobotsValue())
        setWinnder(getWinner([robotValue, playersValue,]))
        handleScore(getWinner([robotValue, playersValue,]))
    });

    const addScoreMutation = useMutation({
        mutationFn: addScore,
    })
    
    const {t} = useTranslation();

    const handleSubmit = (() =>{
        if(scoreValue != 0){
            addScoreMutation.mutate({
                name: playersName,
                score: scoreValue,
            })
        }
    });

    return (
        <div className={GamePageCSS.game}>
            <div className={GamePageCSS.topbar}>
                <img src={rules} className={GamePageCSS.rules}/>
                <DecisionScreen value={winner}/>
                <div className={GamePageCSS.scoreForm}>
                    <ScoreScreen value={scoreValue}/>
                    <form onSubmit={handleSubmit} className={GamePageCSS.form}> 
                        <input type="text" 
                            placeholder={`${t("placeholder")}`}
                            required 
                            value = {playersName}
                            onChange={(e)=>setPlayersName(e.target.value)}
                        />
                        <button className={GamePageCSS.formbtn}>{t("submit")}</button>
                    </form>
                    {t("warning")}
                </div>
            </div>

            <div className={GamePageCSS.gamefield}>
                <GameField playersValue={playersValue} robotValue={robotValue} result={winner}/>
            </div>

            <div className={GamePageCSS.playersdeck}>
                <PlayersDeck handlePlayersValue={handlePlayersValue}/>
            </div>
        </div>
    )
})

export default GamePage;


