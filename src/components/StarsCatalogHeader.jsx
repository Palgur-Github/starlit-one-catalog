import { Link } from "react-router-dom";
import "./Header.css";
import "../App.css";
import Header from "./Header";

function StarsCatalogHeader() {
  return (
    <header className="header">
      <nav>
        <Header></Header>
        <ul className="link-list">
          <li>
          <Link className="link" to="/StarPatternsPage"><button> Star Patterns  </button></Link>
          <Link className="link" to="/StarPatternCatalog"><button> Star Pattern Catalog </button></Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default StarsCatalogHeader