import axios from "axios";

export type CharacterType = {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: location,
    location: location,
    image: string;
    episode: string[];
    url: string,
    created: string;
}

type location = {
    name: string,
    url: string,
}

export const getChars = (async (page: number = 1) => {
    const res = await axios
        .get(`https://rickandmortyapi.com/api/character?page=${page}`);
    return res.data;
})

export const getChar = (async (id: string = '1') => {
    const res = await axios
        .get(`https://rickandmortyapi.com/api/character/${id}`);
    return res.data;
})