import { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { getComics, getHeroes, getSeries, getStories } from '../../actions';
import { Cards } from '../Cards/Cards';
import { CategoriesCards } from '../CategoriesCards/CategoriesCards';
import { SearchBar } from '../SearchBar/SearchBar';
import style from './Heroes.module.scss';

export function Heroes() {
    const heroes = useSelector(
        (state: RootStateOrAny) => state.allHeroes
    )
    const searchedHeroes = useSelector(
        (state: RootStateOrAny) => state.searchedHeroe
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

    
    function backToHeroes(e: any) {
        e.preventDefault();
        window.location.reload();
    }

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
            <button onClick={(e) => backToHeroes(e)} className={searchedHeroes <= 1 && comics <= 1 && stories <= 1 && series <= 1 ? style.hidden : style.visible} >back to heroes</button>
            <div data-aos="fade-right" data-aos-duration="1000" className={style.cards} >
            {searchedHeroes <= 1 && comics <= 1 && stories <= 1 && series <= 1 ? heroes.map((h: any) => {
                return(
                    <div className={style.heroeSearched} data-aos="fade-right" data-aos-duration="1000">
                        <Cards 
                            image={`${h.thumbnail.path}.${h.thumbnail.extension}`}
                            name={h.name}
                            id = {h.id}
                        /> 
                    </div>
                )
            }): null}
            </div>
            <div className={searchedHeroes <= 1 && comics <= 1 && stories <= 1 && series <= 1 ? style.vHidden : style.vVisible}>
                {searchedHeroes ? searchedHeroes.map((c: any) => {
                    return (
                            <Cards 
                                image={`${c.thumbnail.path}.${c.thumbnail.extension}`}
                                name={c.name}
                                id = {c.id}
                            />
                    )
                }): null}
                {comics ? comics.map((c: any) => {
                    return (
                            <CategoriesCards
                            img= {`${c.thumbnail.path}.${c.thumbnail.extension}`}
                            title={c.title}
                            description={c.description}/>
                    )
                }): null}
                {series ? series.map((s: any) => {
                    return (
                            <CategoriesCards
                            img= {`${s.thumbnail.path}.${s.thumbnail.extension}`}
                            title={s.title}
                            />
                    )
                }): null}
                {stories ? stories.map((st: any) => {
                    return (
                            <CategoriesCards
                            title={st.title}
                            />
                    )
                }): null}
            </div>
        </div>
    )
}