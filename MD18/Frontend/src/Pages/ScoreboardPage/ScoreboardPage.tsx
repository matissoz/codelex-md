import { UseQueryResult } from "@tanstack/react-query";
import React from "react";
import { useTranslation } from "react-i18next";
import { ScoreType } from "../../api/types";
import ScoreboardPageCSS from "./ScoreboardPage.module.scss"
import ScoreRow from "./ScoreRow/ScoreRow";

type Props ={
    query: UseQueryResult<ScoreType[], unknown>;
};

const ScoreboardPage = (({query}: Props) => {
    const {t} = useTranslation();

    if(query.isLoading) return <div>Loading..</div>;
    if(query.isError) return <div>Loading..</div>;

    const scoreData:ScoreType[] = query.data;

    return (
        <div className={ScoreboardPageCSS.scoreboard}>
            <h1>{t('name')} : {t('score')}</h1>
            {scoreData.map((data, i) =><ScoreRow data={data} key={i}/>)}
        </div>
    )
})

export default ScoreboardPage;