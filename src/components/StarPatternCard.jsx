import "./StarPatternCard.css";

function StarPatternCard(props) {
  const { starPattern, deleteStarPattern } = props;

  return (
    <li className="star-pattern-card">
      <img src={starPattern.image} className="star-pattern-img" />
      <h3>{starPattern.name}</h3>
      <p>{starPattern.translation}</p>
      <button onClick={() => deleteStarPattern(starPattern)}>Delete the Star Pattern</button>
    </li>
  );
}

export default StarPatternCard;