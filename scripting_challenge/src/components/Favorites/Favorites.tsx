import { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { Cards } from '../Cards/Cards';

export function Favorites() {
    const favorites = useSelector(
        (state: RootStateOrAny) => state.favorites
    )

    return (
        <div>
            <h1>Your favorites heroes</h1>
            {favorites ? favorites.map((h: any) => {
                {console.log(h.image)}
                return (
                <div>
                    <Cards 
                        image={h.image}
                        name={h.name}
                        id = {h.id}
                    />
                </div>
                )
            }): null}
        </div>
    )
}