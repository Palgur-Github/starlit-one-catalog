import { Link } from "react-router-dom";
import "./Header.css";
import Header from "./Header";

function StarPatternPageHeader() {
  return (
    <header className="header">
      <nav>
        <Header></Header>
        <ul className="link-list">
          <li>
          <Link className="link" to="/StarPatternCatalog"><button> Star Pattern Catalog </button></Link>
          <Link className="link" to="/StarsCatalog"><button> Stars Catalog </button></Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default StarPatternPageHeader