import { Link } from "react-router-dom";
import style from './Cards.module.css';

export function Cards({image, name, id}: any){
    console.log('id',id)
    console.log('NAME',name)
    return(
        <div className={style.container} key = {id}>
             <Link to={`/heroeDetail/${id}`}>
                <img className={style.img} src={image} />
                <h1 className={style.name}>{name}</h1>
            </Link>
        </div>
    )
}