import { 
    GET_COMICS, 
    GET_SERIES, 
    GET_HEROES, 
    GET_HEROES_ID, 
    SEARCH_HEROES_BY_COMICS, 
    SEARCH_HEROES_BY_NAME,
    SEARCH_HEROES_BY_SERIES, 
    GET_STORIES,
    SEARCH_HEROES_BY_STORIES,
    GET_HEROES_STORIES,
    GET_HEROES_COMICS,
    GET_HEROES_SERIES,
    GET_FAVORITES
} from "../actions"

const initialState = {
    allHeroes: [],
    comics: [],
    series: [],
    stories: [],
    heroeDetail: [],
    searchedHeroe: [],
    searchedComic: [],
    searchedSerie: [],
    searchedStorie: [],
    heroeComics: [],
    heroeSeries: [],
    heroeStories: [],
    favorites: [],
}

export interface IAction {
    name: string,
    title: string,
    comics: {
        items: [],
    }
}

export default function rootReducer(state = initialState, action: any) {
    switch(action.type) {
        case GET_HEROES:
            return {
                ...state,
                allHeroes: action.payload
            }
        case GET_COMICS:
            return {
                ...state,
                comics: action.payload
            }
        case GET_SERIES:
            return {
                ...state,
                series: action.payload
            }
        case GET_STORIES:
            return {
                ...state,
                stories: action.payload
            }
        case GET_HEROES_ID:
            return {
                ...state,
                heroeDetail: action.payload
            }
        case GET_HEROES_COMICS:
            return {
                ...state,
                heroeComics: action.payload
            }
        case GET_HEROES_SERIES:
            return {
                ...state,
                heroeSeries: action.payload
            }
        case GET_HEROES_STORIES:
            return {
                ...state,
                heroeStories: action.payload
            }
        case SEARCH_HEROES_BY_NAME:
            return {
                ...state,
                searchedHeroe: state.allHeroes.filter(
                    (heroe: IAction) => 
                    heroe.name.toLocaleLowerCase() === action.payload
                )
            }
        case SEARCH_HEROES_BY_COMICS:
            return {
                ...state,
                searchedComic: state.comics.filter(
                    (c: IAction) => 
                        c.title.toLowerCase() === action.payload
                )
            }
        case SEARCH_HEROES_BY_SERIES:
            return {
                ...state,
                searchedSerie: state.series.filter(
                    (s: IAction) =>
                        s.title.toLocaleLowerCase() === action.payload
                )
            }
        case SEARCH_HEROES_BY_STORIES:
            return {
                ...state,
                searchedStorie: state.stories.filter(
                    (st: IAction) =>
                        st.title.toLocaleLowerCase() === action.payload
                )
            }
        case GET_FAVORITES:
            console.log('payload',action.payload)
            return {
                ...state,
                favorites : [...state.favorites, action.payload]
            }
        default:
            return state;
    }
}