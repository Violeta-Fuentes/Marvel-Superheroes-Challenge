import { Link } from "react-router-dom";
import style from './Cards.module.css';

export function Cards({image, name, id}: any){
    
    return(
        <div className={style.container} key = {id}>
             <Link to={`/heroeDetail/${id}`}>
                <img className={style.img} src={image} />
            </Link>
            <h3 className={style.name}>{name}</h3>
        </div>
    )
}