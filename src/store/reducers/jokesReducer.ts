import { JokesReducer } from "../../types/interfaces"
import { GET_JOKE, ADD_TO_FAV, REMOVE_ALL_JOKES, REMOVE_JOKE, REMOVE_ALL_FAVS, REMOVE_FAV_JOKE } from "../types"

const initialState: JokesReducer = {
    jokes: JSON.parse(localStorage.getItem("jokes") || '[]'),
    favorites: JSON.parse(localStorage.getItem("favorites") || '[]'),
}

export const jokesReducer = (state = initialState, { type, id, payload }: { type: string, id: number, payload: any }) => {
    switch (type) {
        case GET_JOKE:
            localStorage.setItem("jokes", JSON.stringify([...state.jokes, payload]));
            return {
                ...state,
                jokes: [...state.jokes, payload],
            }
        case REMOVE_JOKE:
            localStorage.setItem("jokes", JSON.stringify([...state.jokes.filter((joke, index) => index !== id)]));
            return {
                ...state,
                jokes: [...state.jokes.filter((joke, index) => index !== id)],
            }
        case REMOVE_FAV_JOKE:
            localStorage.setItem("favorites", JSON.stringify([...state.favorites.filter((joke, index) => index !== id)]));
            return {
                ...state,
                favorites: [...state.favorites.filter((joke, index) => index !== id)],
            }
        case ADD_TO_FAV:
            localStorage.setItem("favorites", JSON.stringify([...state.favorites, ...state.jokes.filter((joke, index) => index === id)]));
            return {
                ...state,
                favorites: [...state.favorites, ...state.jokes.filter((favJoke, index) => index++ === id)],
            }
        case REMOVE_ALL_JOKES:
            localStorage.setItem("jokes", JSON.stringify([]));
            return {
                ...state,
                jokes: [],
            }
        case REMOVE_ALL_FAVS: {
            localStorage.setItem("favorites", JSON.stringify([]));
            return {
                ...state,
                favorites: [],
            }
        }
        default:
            return state;
    }
}