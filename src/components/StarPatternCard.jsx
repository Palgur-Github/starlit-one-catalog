import "./StarPatternCard.css";
import { Link } from "react-router-dom";

function StarPatternCard(props) {
  const { starPattern, deleteStarPattern } = props;

  return (
    <li className="star-pattern-card">
      <div className = "container-class">
      <div className = "star-pattern-image">
      <img src={starPattern.image} className="star-pattern-img" />
      </div>
      <h2>Name : {starPattern.name}</h2>
      <p>Translation: {starPattern.translation}</p>
      <Link className="link" to="/StarPatternCatalog"><button> More Information </button></Link>
      <button onClick={() => deleteStarPattern(starPattern)}>Delete the Star Pattern</button>
     
      </div>
    </li>
  );
}

export default StarPatternCard;