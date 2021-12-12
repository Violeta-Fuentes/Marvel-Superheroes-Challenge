import { useEffect } from 'react';
import { connect, RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getHeroesId } from '../../actions';

export function HeroeDetail() {
    const dispatch = useDispatch();
    const heroeId = useSelector(
        (state: RootStateOrAny) => state.heroeDetail
    )
    const { id } = useParams();
    console.log('HEROE',heroeId)
    console.log(id)
        useEffect(() => {
            dispatch(getHeroesId(id));
            console.log(id)
        }, [])
    return (
        <div>
            {heroeId.map((hId: any) => {
                console.log(hId.comics.items)
                return (
                    <div>
                        <img src={`${hId.thumbnail.path}.${hId.thumbnail.extension}`} alt="" />
                        <h1>{hId.name}</h1>
                        {hId.comics.items.map((i: any) => {return (<h1>{i.name}</h1>)})}
                        {hId.series.items.map((s: any) => {return (<h1>{s.name}</h1>)})}
                        {hId.stories.items.map((st: any) => {return (<h1>{st.name}</h1>)})}
                    </div>
                )
            })}
        </div>
    )
}