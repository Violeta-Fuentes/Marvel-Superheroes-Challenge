import { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getHeroesId } from '../../actions';
import style from './HeroeDetail.module.css';

export function HeroeDetail() {
    const dispatch = useDispatch();

    const heroeId = useSelector(
        (state: RootStateOrAny) => state.heroeDetail
    )

    const { id } = useParams();

        useEffect(() => {
            dispatch(getHeroesId(id));
        }, []);

    return (
        <div>
            {heroeId.map((hId: any) => {
                return (
                    <div className={style.container}>
                        <img className={style.imgBackground} src={`${hId.thumbnail.path}.${hId.thumbnail.extension}`} alt="" />
                        <div className={style.infoContainer}>
                            <div className={style.img}>
                                <img className={style.img} src={`${hId.thumbnail.path}.${hId.thumbnail.extension}`} alt="" />
                            </div>
                            <div className={style.cards}>
                            <Link to='/heroes'><button>Back to heroes</button></Link>
                                <div className={style.name}>
                                    <h1>{hId.name}</h1>
                                </div>
                                <div className={style.info}>
                                    {hId.comics.items.map((i: any) => {
                                        return (
                                            <div>
                                                <p>{i.name},</p>
                                            </div>
                                        )})
                                    }
                                </div>
                                <div className={style.info}>
                                    {hId.series.items.map((s: any) => {
                                        return (
                                        <p>{s.name},</p>
                                        )})
                                    }
                                </div>
                                <div className={style.info}>
                                    {hId.stories.items.map((st: any) => {
                                        return (
                                        <p>{st.name},</p>
                                        )})
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}