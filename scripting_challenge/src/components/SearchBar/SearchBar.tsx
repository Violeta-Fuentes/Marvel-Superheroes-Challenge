import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchHeroesByComics, searchHeroesByName, searchHeroesBySeries, searchHeroesByStories } from "../../actions";

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

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                    placeholder="Search"
                    id="searchbar"/>
                <button type="submit" onClick={handleSubmit}>Search</button>
            </form>
        </div>
    )
}