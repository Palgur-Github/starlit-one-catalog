import "./StarPatternList.css";
import StarPatternCard from "./StarPatternCard";
import sagittaConstellation from "../assets/sagittaConstellation.jpeg";
import ursaMinorConstellation from "../assets/ursaMinorConstellation.jpeg";
import summerTriangleAsterism from "../assets/summerTriangleAsterism.jpeg";
import { useState } from "react";
import CreateStarPattern from "./CreateStarPattern";

function StarPatternList() {
  const starPatternData = [
    {
      image: sagittaConstellation.jpeg,
      name: "Sagitta",
      translation: "The Arrow",
    },
    {
      image: ursaMinorConstellation.jpeg,
      name: "Ursa Minor",
      translation: "The Little Bear",
    },
    {
      image: summerTriangleAsterism.jpeg,
      name: "Summer Triangle",
      translation: "The Summer Triangle",
    },
  ];

  const deleteStarPattern = (starPatternToDelete) => {
    const filteredStarPatterns = starPatterns.filter(
      (starPattern) => starPattern.name !== starPatternToDelete.name
    );

    setStarPatterns(filteredStarPatterns);
  };

  const createStarPattern = (newStarPattern) => {
    setStarPatterns([...starPatterns, newStarPattern])
  }

  const [starPatterns, setStarPatterns] = useState(starPatternData);

  const starPatternCards = starPatterns.map((starPattern) => {
    return (
      <StarPatternCard
        starPattern={starPattern}
        deleteStarPattern={deleteStarPattern}
        key={starPattern.name}
      ></StarPatternCard>
    );
  });

  return (
    <section className="star-pattern-section">
      <CreateStarPattern createStarPattern={createStarPattern}></CreateStarPattern>
      <h2>Star Patterns :</h2>
      <ul className="star-pattern-list">{starPatternCards}</ul>
    </section>
  );
}

export default StarPatternList;
