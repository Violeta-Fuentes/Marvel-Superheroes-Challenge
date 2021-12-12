import { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getComics, getHeroes, getSeries, getStories } from '../../actions';
import { Cards } from '../Cards/Cards';
import { SearchBar } from '../SearchBar/SearchBar';

//https://gateway.marvel.com:443/v1/public/characters?apikey=1676295427dbc8bb0a4a0792b8caf113
//key privada: b19d36e595e6121b34025ae46d06248a013453ba
//key publica: 1676295427dbc8bb0a4a0792b8caf113
//ts: 1b19d36e595e6121b34025ae46d06248a013453ba1676295427dbc8bb0a4a0792b8caf113

//hash: edf03bfd34b34c733d864793a7410fb7
export function Heroes() {
    const heroes = useSelector(
        (state: RootStateOrAny) => state.allHeroes
    )
    const comics = useSelector(
        (state: RootStateOrAny) => state.comics
    )
    const series = useSelector(
        (state: RootStateOrAny) => state.series
    )
    const stories = useSelector(
        (state: RootStateOrAny) => state.stories
    )
    const dispatch = useDispatch();

    console.log('comics',comics)
    console.log('heroes',heroes)
    console.log('series',series)
    console.log('stories',stories)

    useEffect(() => {
        dispatch(getHeroes());
        dispatch(getComics());
        dispatch(getSeries());
        dispatch(getStories());
    }, [])
    return(
        <div>
            <div>
                <SearchBar />
            </div>
            {heroes.map((h: any) => {
                return(
                    <Cards 
                    image={`${h.thumbnail.path}.${h.thumbnail.extension}`}
                    name={h.name} /> 
                )
            })}
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