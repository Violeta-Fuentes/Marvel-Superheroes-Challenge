import { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import arrow from '../../assets/flecha-con-garabatos.png';
import { getHeroeComics, getHeroeSeries, getHeroesId, getHeroeStories } from '../../actions';
import style from './HeroeDetail.module.scss';

export function HeroeDetail() {
    const dispatch = useDispatch();

    const heroeId = useSelector(
        (state: RootStateOrAny) => state.heroeDetail
    )
    const heroeComics = useSelector(
        (state: RootStateOrAny) => state.heroeComics
    )
    const heroeSeries = useSelector(
        (state: RootStateOrAny) => state.heroeSeries
    )
    const heroeStories = useSelector(
        (state: RootStateOrAny) => state.heroeStories
    )

    const { id } = useParams();

        useEffect(() => {
            dispatch(getHeroesId(id));
            dispatch(getHeroeComics(id));
            dispatch(getHeroeSeries(id))
            dispatch(getHeroeStories(id))
        }, []);

    return (
        <div className={style.container}>
            {heroeId.map((hId: any) => {
                return (
                    <div className={style.header}>
                            <Link to='/heroes'><button className={style.b}>Back to heroes</button></Link>
                        <div className={style.infoContainer}>
                            <div className={style.imgContainer}>
                                <h2 className={style.name}>{hId.name}</h2>
                                <img className={style.img} src={`${hId.thumbnail.path}.${hId.thumbnail.extension}`} alt="" />
                            </div>
                        </div>
                    </div>       
                )
            })}
            <div>
                <img className={style.arrow} src={arrow} alt="" />
                <h5 className={style.scroll}>Scroll down!  ;)</h5>
                <p data-aos="fade-left" data-aos-duration="1000" className={style.comicsHeader}>comics</p>     
            </div>
            <div className={style.comics}>
                {heroeComics.map((i: any) => {
                    return (
                        <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                            <img className={style.itemsImage} src={`${i.thumbnail.path}.${i.thumbnail.extension}`} alt="" />
                        </div>
                    )
                })}
            </div>
                <p data-aos="fade-up" data-aos-duration="1000" className={style.seriesHeader}>Series</p>
            <div className={style.comics}>
                {heroeSeries.map((s: any) => {
                    return (
                        <div>
                            <img data-aos="fade-right" data-aos-duration="1500" data-aos-delay="200" className={style.itemsImage} src={`${s.thumbnail.path}.${s.thumbnail.extension}`} alt="" />
                        </div>
                    )
                })}
            </div>
            <div className={style.storiesContainer}>
                <p data-aos="fade-right" data-aos-duration="1000" className={style.storiesHeader}>Stories</p>
                <div className={style.stories}>
                    {heroeStories.map((storie: any) => {
                        return (
                            <ul data-aos="fade-down" data-aos-duration="1500" data-aos-delay="200">
                                <li>{storie.title}</li>
                            </ul>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}