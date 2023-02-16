import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import DecisionScreenCSS from "./DecisionScreen.module.scss"

type Props = {
    value:string | undefined;
}

const DecisionScreen = (({value}: Props) =>{
    
    const {t} = useTranslation();

    return (
    <div className={DecisionScreenCSS.screen}>
        <h2 className={`
            ${DecisionScreenCSS.decision}
            ${value == `Let's Play` && `${DecisionScreenCSS.field_active}`}
            ${value == 'Draw' && `${DecisionScreenCSS.field_draw}`}
            ${value == 'Win' && `${DecisionScreenCSS.field_win}`}
            ${value == 'Lost' && `${DecisionScreenCSS.field_lost}`}
        `}
        > 
        {value == `Let's Play` && `${t("letsplay")}`}
        {value == 'Draw' && `${t('Draw')}`}
        {value == 'Win' && `${t('Win')}`}
        {value == 'Lost' && `${t('Lost')}`}
        </h2>
    </div>
    )
})

export default DecisionScreen;