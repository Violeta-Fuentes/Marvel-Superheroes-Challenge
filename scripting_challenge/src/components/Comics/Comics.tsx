import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function Comics() {
    const comics = useSelector(
        (state: RootStateOrAny) => state.comics
    )
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Comics</h1>
        </div>
    )
}