import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchHeroesByComics, searchHeroesByName, searchHeroesBySeries, searchHeroesByStories } from "../../actions";
import style from './SearchBar.module.css';
import lens from '../../assets/lupa.png';

export function SearchBar() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    function handleSubmit(e: any) {
        e.preventDefault();
        dispatch(searchHeroesByName(input));
        dispatch(searchHeroesByComics(input));
        dispatch(searchHeroesBySeries(input));
        dispatch(searchHeroesByStories(input));
        setInput('');
    }

    // function backToHeroes(e: any) {
    //     e.preventDefault();
    //     window.location.reload();
    // }

    return (
        <div>
            <form className={style.form} onSubmit={handleSubmit}>
                <input type="text" 
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                    placeholder="Search..."
                    id="searchbar"
                    className={style.input}/>
            </form>
            {/* <div>
                <button onClick={(e) => backToHeroes(e)}>Back to heroes</button>
            </div> */}
        </div>
    )
}