import axios from "axios";
import { ScoreType } from './types'
 
export const getScore = ()=> {
    return axios
     .get<ScoreType[]>(`http://localhost:3004/score`)
     .then (({data}) => data);
 
} 

export const addScore = (async ({name, score}: ScoreType) => {
    const res = await axios
        .post<ScoreType>(`http://localhost:3004/score`,{
            name, 
            score
        });
    return res.data;
})