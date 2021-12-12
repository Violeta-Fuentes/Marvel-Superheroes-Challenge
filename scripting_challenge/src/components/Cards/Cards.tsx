import { Link } from "react-router-dom";

export function Cards({image, name}: any){
    return(
        <div>
            <Link to='/heroeDetail'><div>
                <img src={image} />
                <h1>{name}</h1>
            </div></Link>
        </div>
    )
}