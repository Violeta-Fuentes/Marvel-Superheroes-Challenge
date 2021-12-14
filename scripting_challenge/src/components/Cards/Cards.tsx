import { Link } from "react-router-dom";
import style from './Cards.module.scss';

export function Cards({image, name, id}: any){

    return(
        <div className={style.container} key = {id}>
            <div className={style.imageContainer}>
                <Link to={`/heroeDetail/${id}`}>
                    <img className={style.img} src={image} />
                </Link>
                <div className={style.nameContainer}>
                    <h3 className={style.name}>{name}</h3>
                </div>
                <div className={style.knowMore}>
                    <p>Click to know more about them</p>
                </div>
            </div>
        </div>
    )
}