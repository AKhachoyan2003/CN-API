export interface Jokes {
    id: number,
    value: string,
}

export interface JokesReducer {
    jokes: Jokes[],
    favorites: Jokes[],
}


export interface State {
    jokesReducer: JokesReducer
}

export interface Props {
    state?: State,
}