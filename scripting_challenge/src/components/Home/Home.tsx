import { Link } from 'react-router-dom';

export function Home() {
    return (
        <div>
            <div>
                <Link to='/heroes'><button>Know our heroes!</button></Link>
            </div>
        </div>
    )
}