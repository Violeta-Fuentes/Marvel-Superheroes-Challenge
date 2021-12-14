import { Link } from 'react-router-dom';

export function CategoriesCards({img, title, description}: any) {
    return (
        <div>
            <img src={img} />
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}