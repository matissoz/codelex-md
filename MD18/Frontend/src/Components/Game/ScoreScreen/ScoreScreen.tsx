import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import ScoreScreenCSS from "./ScoreScreen.module.scss"

type Props = {
    value: number| undefined;
}

const ScoreScreen = (({value}: Props) =>{
    const {t} = useTranslation();
    
    return (
    <div className={ScoreScreenCSS.screen}>
        <h2 className={ScoreScreenCSS.score}>{t('score')} {value}</h2>
    </div>
    )
})

export default ScoreScreen;