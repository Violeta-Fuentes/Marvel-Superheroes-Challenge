import { Link } from "react-router-dom";

export function Cards({image, name}: any){
    return(
        <div>
            <div>
                <img src={image} />
                <h1>{name}</h1>
            </div>
        </div>
    )
}