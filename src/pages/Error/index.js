import { Link } from "react-router-dom";
import './error.css';

function Error() {
    return(
        <div className="not-found">
            <h1>Erro 404</h1>
            <h2>Página não encontrada</h2>
            <Link to={"/"}>Volte para Home</Link>
        </div>
    )
}

export default Error;