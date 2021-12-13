import { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { getComics, getHeroes, getSeries, getStories } from '../../actions';
import { Cards } from '../Cards/Cards';
import { SearchBar } from '../SearchBar/SearchBar';
import style from './Heroes.module.css';

export function Heroes() {
    const heroes = useSelector(
        (state: RootStateOrAny) => state.allHeroes
    )
    const comics = useSelector(
        (state: RootStateOrAny) => state.searchedComic
    )
    const series = useSelector(
        (state: RootStateOrAny) => state.searchedSerie
    )
    const stories = useSelector(
        (state: RootStateOrAny) => state.searchedStorie
    )
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHeroes());
        dispatch(getComics());
        dispatch(getSeries());
        dispatch(getStories());
    }, []);

    return(
        <div>
            <div>
                <SearchBar />
            </div>
            <div className={style.cards} >
            {heroes.map((h: any) => {
                return(
                        <Cards 
                            image={`${h.thumbnail.path}.${h.thumbnail.extension}`}
                            name={h.name}
                            id = {h.id}
                        /> 
                )
            })}
            </div>
            {comics ? comics.map((c: any) => {
                return (
                    <div>
                        <img src={`${c.thumbnail.path}.${c.thumbnail.extension}`} />
                        <h1>{c.title}</h1>
                    </div>
                )
            }): null}
            {series ? series.map((s: any) => {
                return (
                    <div>
                        <img src={`${s.thumbnail.path}.${s.thumbnail.extension}`} />
                        <h1>{s.title}</h1>
                    </div>
                )
            }): null}
            {stories ? stories.map((st: any) => {
                return (
                    <div>
                        <h1>{st.title}</h1>
                    </div>
                )
            }): null}
        </div>
    )
}