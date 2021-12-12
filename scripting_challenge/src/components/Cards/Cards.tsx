import { Link } from "react-router-dom";

export function Cards({image, name, id}: any){
    console.log('id',id)
    console.log('NAME',name)
    return(
        <div key = {id}>
            <Link to={`/heroeDetail/${id}`}>
                <div>
                    <img src={image} />
                    <h1>{name}</h1>
                </div>
            </Link>
        </div>
    )
}