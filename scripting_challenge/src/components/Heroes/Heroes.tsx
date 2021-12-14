import { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { getComics, getHeroes, getSeries, getStories } from '../../actions';
import { Cards } from '../Cards/Cards';
import { CategoriesCards } from '../CategoriesCards/CategoriesCards';
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
        <div className={style.container}>
            <div data-aos="fade-left" data-aos-duration="1000">
                <SearchBar />
            </div>
            <div data-aos="fade-right" data-aos-duration="1000" className={style.cards} >
            {heroes.map((h: any) => {
                return(
                    <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
                        <Cards 
                            image={`${h.thumbnail.path}.${h.thumbnail.extension}`}
                            name={h.name}
                            id = {h.id}
                        /> 
                    </div>
                )
            })}
            </div>
            {comics ? comics.map((c: any) => {
                return (
                    <div>
                        <CategoriesCards
                        img= {`${c.thumbnail.path}.${c.thumbnail.extension}`}
                        title={c.title}
                        description={c.description}/>
                    </div>
                )
            }): null}
            {series ? series.map((s: any) => {
                return (
                    <div>
                        <CategoriesCards
                        img= {`${s.thumbnail.path}.${s.thumbnail.extension}`}
                        title={s.title}
                        />
                    </div>
                )
            }): null}
            {stories ? stories.map((st: any) => {
                return (
                    <div className={style.storieCard}>
                        <CategoriesCards
                        title={st.title}
                        />
                    </div>
                )
            }): null}
        </div>
    )
}