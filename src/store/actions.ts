import axios from "axios";
import { GET_JOKE, ADD_TO_FAV, REMOVE_JOKE, REMOVE_ALL_JOKES, REMOVE_ALL_FAVS, REMOVE_FAV_JOKE } from "./types";

export const getJoke = () => {
    return async (dispatch: any) => {
        return await axios.get('https://api.chucknorris.io/jokes/random')
            .then(result => {
                dispatch({ type: GET_JOKE, payload: result.data.value })
            }).catch(e => {
                console.log(e);
            })
    }
};

export const removeJoke = (id: number) => ({ type: REMOVE_JOKE, id });
export const removeFavJoke = (id: number) => ({ type: REMOVE_FAV_JOKE, id });
export const removeAllJokes = () => ({ type: REMOVE_ALL_JOKES });
export const removeAllFavs = () => ({ type: REMOVE_ALL_FAVS });
export const addToFav = (id: number) => ({ type: ADD_TO_FAV, id });