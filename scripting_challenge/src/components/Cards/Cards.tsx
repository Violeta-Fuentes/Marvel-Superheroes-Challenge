import { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getFavorites } from "../../actions";
import style from './Cards.module.scss';
import heart from '../../assets/heart.png';

export function Cards({image, name, id}: any){
    const dispatch = useDispatch();

    function addFavorites(e: any) {
        e.preventDefault();
        dispatch(getFavorites({image, name, id}));
    }
    
    return(
        <div>
        <div className={style.container} key = {id}>
            <div className={style.imageContainer}>
                <Link to={`/heroeDetail/${id}`}>
                    <img className={style.img} src={image} />
        {/* <img src={heart} onClick={(e) => addFavorites(e)} className={style.heart} /> */}
                </Link>
                <div className={style.nameContainer}>
                    <h3 className={style.name}>{name}</h3>
                </div>
                <div className={style.knowMore}>
                    <p>Click to know more about them</p>
                </div>
            </div>
        </div>
        </div>
    )
}