import { Link } from "react-router-dom";
import "./Header.css";
import "../App.css";
import Header from "./Header";

function StarPatternCatalogHeader() {
  return (
    <header className="header">
      <nav>
        <Header></Header>
        <ul className="link-list">
          <li>
          <Link className="link" to="/StarPatternPage"><button> Star Patterns  </button></Link>
          <Link className="link" to="/StarsCatalog"><button> Stars Catalog </button></Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default StarPatternCatalogHeader