import { Link } from "react-router-dom";
import "./Header.css";
import starlitOneLogo from '../assets/starlitOneLogo.png';

function Header() {
  return (
    <header className="header">
      <nav>
          <Link className="home-icon" to="/"><img src={starlitOneLogo}/>
          <h1>Starlit One
            <br/>
             Catalog</h1>
          </Link>
      </nav>
    </header>
  )
}

export default Header