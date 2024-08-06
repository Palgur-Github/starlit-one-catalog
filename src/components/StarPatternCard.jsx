import "./StarPatternCard.css";

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
      <button onClick={() => deleteStarPattern(starPattern)}>Delete the Star Pattern</button>
     
      </div>
    </li>
  );
}

export default StarPatternCard;