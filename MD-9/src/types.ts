export type Char = {
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

export type location = {
    name: string,
    url: string,
}