import {Link} from "react-router-dom"

export const Navigation = () => {
    return(
        <nav>
            <ul>
                <li>
                    <Link to={"/tekken"}>Tekken</Link>
                </li>
                <li>
                    <Link to={"/stf"}>Street</Link>
                </li>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
            </ul>
        </nav>
    )
}
