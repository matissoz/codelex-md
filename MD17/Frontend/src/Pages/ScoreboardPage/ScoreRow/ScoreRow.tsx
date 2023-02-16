import { UseQueryResult } from "@tanstack/react-query";
import React from "react";
import { ScoreType } from "../../../api/types";
import ScoreRowCSS from "./ScoreRow.module.scss"

type Props ={
    data: ScoreType;
    key: number
};

const ScoreRow = (({data, key}: Props) => {

    return (
        <div key={key}className={ScoreRowCSS.score}>
            <h2>{data.name}</h2>
            :
            <h2>{data.score}</h2>
        </div>
    )
})

export default ScoreRow;