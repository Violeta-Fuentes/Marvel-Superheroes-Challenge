import { Dispatch } from 'redux';

export const GET_HEROES = "GET_HEROES";
export const GET_COMICS = "GET_COMICS";
export const GET_SERIES = "GET_SERIES";
export const GET_STORIES = "GET_STORIES";
export const GET_FAVORITES = "GET_FAVORITES";
export const GET_HEROES_ID = "GET_HEROES_ID";
export const SEARCH_HEROES_BY_NAME = "SEARCH_HEROES_BY_NAME"; 
export const SEARCH_HEROES_BY_COMICS = "SEARCH_HEROES_BY_COMICS"; 
export const SEARCH_HEROES_BY_SERIES = "SEARCH_HEROES_BY_SERIES"; 
export const SEARCH_HEROES_BY_STORIES = "SEARCH_HEROES_BY_STORIES"; 
export const GET_HEROES_COMICS = "GET_HEROES_COMICS";
export const GET_HEROES_SERIES = "GET_HEROES_SERIES";
export const GET_HEROES_STORIES = "GET_HEROES_STORIES";

export function getHeroes() {
    return function(dispatch: Dispatch) {
        return fetch("https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=1676295427dbc8bb0a4a0792b8caf113&hash=edf03bfd34b34c733d864793a7410fb7")
            .then((response) => response.json())
            .then((json) => {
                dispatch({ type: GET_HEROES, payload: json.data.results });
            });
    };
}

export function getComics() {
    return function(dispatch: Dispatch) {
        return fetch("https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=1676295427dbc8bb0a4a0792b8caf113&hash=edf03bfd34b34c733d864793a7410fb7")
            .then((response) => response.json())
            .then((json) => {
                dispatch({ type: GET_COMICS, payload: json.data.results });
            });
    };
}

export function getSeries() {
    return function(dispatch: Dispatch) {
        return fetch("https://gateway.marvel.com:443/v1/public/series?ts=1&apikey=1676295427dbc8bb0a4a0792b8caf113&hash=edf03bfd34b34c733d864793a7410fb7")
            .then((response) => response.json())
            .then((json) => {
                dispatch({ type: GET_SERIES, payload: json.data.results });
            });
    };
}

export function getStories() {
    return function(dispatch: Dispatch) {
        return fetch("https://gateway.marvel.com:443/v1/public/stories?ts=1&apikey=1676295427dbc8bb0a4a0792b8caf113&hash=edf03bfd34b34c733d864793a7410fb7")
            .then((response) => response.json())
            .then((json) => {
                dispatch({ type: GET_STORIES, payload: json.data.results });
            });
    };
}

export function getHeroesId(id: any) {
    return function(dispatch: Dispatch) {
        return fetch(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=1676295427dbc8bb0a4a0792b8caf113&hash=edf03bfd34b34c733d864793a7410fb7`)
            .then((response) => response.json())
            .then((json) => {
                dispatch({ type: GET_HEROES_ID, payload: json.data.results });
            });
    };
}

export function getHeroeComics(id: any) {
    return function(dispatch: Dispatch) {
        return fetch(`https://gateway.marvel.com:443/v1/public/characters/${id}/comics?ts=1&apikey=1676295427dbc8bb0a4a0792b8caf113&hash=edf03bfd34b34c733d864793a7410fb7`)
            .then((response) => response.json())
            .then((json) => {
                dispatch({ type: GET_HEROES_COMICS, payload: json.data.results });
            });
    };
}
export function getHeroeSeries(id: any) {
    return function(dispatch: Dispatch) {
        return fetch(`https://gateway.marvel.com:443/v1/public/characters/${id}/series?ts=1&apikey=1676295427dbc8bb0a4a0792b8caf113&hash=edf03bfd34b34c733d864793a7410fb7`)
            .then((response) => response.json())
            .then((json) => {
                dispatch({ type: GET_HEROES_SERIES, payload: json.data.results });
            });
    };
}
export function getHeroeStories(id: any) {
    return function(dispatch: Dispatch) {
        return fetch(`https://gateway.marvel.com:443/v1/public/characters/${id}/stories?ts=1&apikey=1676295427dbc8bb0a4a0792b8caf113&hash=edf03bfd34b34c733d864793a7410fb7`)
            .then((response) => response.json())
            .then((json) => {
                dispatch({ type: GET_HEROES_STORIES, payload: json.data.results });
            });
    };
}

export function searchHeroesByName(payload: string) {
    return {
        type: SEARCH_HEROES_BY_NAME,
        payload
    }
}

export function searchHeroesByComics(payload: string) {
    return {
        type: SEARCH_HEROES_BY_COMICS,
        payload
    }
}

export function searchHeroesBySeries(payload: string) {
    return {
        type: SEARCH_HEROES_BY_SERIES,
        payload
    }
}

export function searchHeroesByStories(payload: string) {
    return {
        type: SEARCH_HEROES_BY_STORIES,
        payload
    }
}

export function getFavorites(payload: any) {
    return {
        type: GET_FAVORITES,
        payload
    }
}