import { useState } from "react";

function CreateStarPatternCatalog(props) {
  const { createStarPatternCatalog } = props;

  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [translation, setTranslation] = useState("");

  const [discoveryPeriod, setDiscoveryPeriod] = useState("");

  const [patternType, setPatternType] = useState("");

  const [mainStarCount, setMainStarCount] = useState(0);

  const [starPattern, setStarPattern] = useState("");

  const handleIdInput = (e) => {
    setId(e.target.value);
  };

  const handleNameInput = (e) => {
    setName(e.target.value);
  };

  const handleTranslationInput = (e) => {
    setTranslation(e.target.value);
  };

  const handleDiscoveryPeriodInput = (e) => {
    setDiscoveryPeriod(e.target.value);
  };

  const handlePatternTypeInput = (e) => {
    setPatternType(e.target.value);
  };

  const handleMainStarCountInput = (e) => {
    setMainStarCount(e.target.value);
  };

  const handleStarPatternInput = (e) => {
    setStarPattern(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStarPattern = {
      id: id,
      name: name,
      translation: translation,
      discoveryPeriod: discoveryPeriod,
      patternType: patternType,
      mainStarCount: mainStarCount,
      starPattern: name,
    };

    if (!newStarPattern.starPattern) {
      console.log("The star pattern's name should not be empty");
      return;
    }
    createStarPatternCatalog(newStarPattern);

    setStarPattern("");
    setId(0); // Reset the form after submission
    setName("");
    setTranslation("");
    setDiscoveryPeriod("");
    setPatternType("");
    setMainStarCount(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" onChange={handleNameInput} value={name} />
      </fieldset>
      <fieldset>
        <label htmlFor="starPattern-translation">Translation: </label>
        <input
          type="text"
          id="starPattern-translation"
          onChange={handleTranslationInput}
          value={translation}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="starPattern-discoveryPeriod">Discovery period: </label>
        <input
          type="text"
          id="starPattern-discoveryPeriod"
          onChange={handleDiscoveryPeriodInput}
          value={discoveryPeriod}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="starPattern-patternType">Pattern Type: </label>
        <input
          type="text"
          id="starPattern-patternType"
          onChange={handlePatternTypeInput}
          value={patternType}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="starPattern-mainStarCount">Main Star Count: </label>
        <input
          type="number"
          id="starPattern-mainStarCount"
          onChange={handleMainStarCountInput}
          value={mainStarCount}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="starPattern-starPattern">Star Pattern (Name): </label>
        <input
          type="text"
          id="starPattern-starPattern"
          onChange={handleStarPatternInput}
          value={starPattern}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="name">Id: </label>
        <input type="text" id="id" onChange={handleIdInput} value={id} />
      </fieldset>
      <button>Create Star Patterns</button>
    </form>
  );
}

export default CreateStarPatternCatalog;
