import { Link } from 'react-router-dom';
import style from './Home.module.css';

export function Home() {
    return (
        <div className={style.wrap}>
            <div>
                <Link to='/heroes'><button>Know our heroes!</button></Link>
            </div>
        </div>
    )
}