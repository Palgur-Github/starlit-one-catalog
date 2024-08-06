import "./StarPatternList.css";
import StarPatternCard from "./StarPatternCard";
import sagittaConstellationImg from "../assets/sagittaConstellation.jpeg";
import ursaMinorConstellationImg from "../assets/ursaMinorConstellation.jpeg";
import summerTriangleAsterismImg from "../assets/summerTriangleAsterism.jpeg";
import { useState } from "react";
import CreateStarPattern from "./CreateStarPattern";

function StarPatternList() {
  const starPatternData = [
    {
      image: sagittaConstellationImg,
      name: "Sagitta",
      translation: "The Arrow",
    },
    {
      image: ursaMinorConstellationImg,
      name: "Ursa Minor",
      translation: "The Little Bear",
    },
    {
      image: summerTriangleAsterismImg,
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
      <h2>Star Patterns</h2>
      <ul className="star-pattern-list">{starPatternCards}</ul>
    </section>
  );
}

export default StarPatternList;
