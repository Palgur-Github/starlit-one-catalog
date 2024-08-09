import { useState } from "react";

function UpdateStarPatternCatalog(props) {
const { starPatternCatalog, updateStarPatternCatalog } = props;
const handleStarPatternCatalogUpdate = () => {
    updateStarPatternCatalog(starPatternCatalog.id);
  }
  const [id, setId] = useState(starPatternCatalog.id);

  const [updatedName, setUpdatedName] = useState(starPatternCatalog.name);

 const [updatedTranslation, setUpdatedTranslation] = useState(starPatternCatalog.translation);

  const [updatedDiscoveryPeriod, setUpdatedDiscoveryPeriod] = useState(starPatternCatalog.discoveryPeriod);

  const [updatedPatternType, setUpdatedPatternType] = useState(starPatternCatalog.patternType);

  const [updatedMainStarCount, setUpdatedMainStarCount] = useState(starPatternCatalog.mainStarCount);

  const [updatedStarPattern, setUpdatedStarPattern] = useState(starPatternCatalog.starPattern);

  const handleIdInput = (e) => {
    setId(e.target.value);
  };

  const handleUpdatedNameInput = (e) => {
    setUpdatedName(e.target.value);
  };

  const handleUpdatedTranslationInput = (e) => {
    setUpdatedTranslation(e.target.value);
  };

  const handleUpdatedDiscoveryPeriodInput = (e) => {
    setUpdatedDiscoveryPeriod(e.target.value);
  };

  const handleUpdatedPatternTypeInput = (e) => {
    setUpdatedPatternType(e.target.value);
  };

  const handleUpdatedMainStarCountInput = (e) => {
    setUpdatedMainStarCount(e.target.value);
  };

  const handleUpdatedStarPatternInput = (e) => {
    setUpdatedStarPattern(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedStarPatternCatalog = {
      
      id: id,
      name: updatedName,
      translation: updatedTranslation,
      discoveryPeriod: updatedDiscoveryPeriod,
      patternType: updatedPatternType,
      mainStarCount: updatedMainStarCount,
      starPattern: updatedStarPattern,
    };
    if (!updatedStarPatternCatalog.id) {
      console.log("The star pattern's name should not be empty");
      return;
    }
    updateStarPatternCatalog(updatedStarPatternCatalog);

    setUpdatedStarPattern(starPatternCatalog.starPattern);
    setId(starPatternCatalog.id);
    setUpdatedName(starPatternCatalog.name);
    setUpdatedTranslation(starPatternCatalog.translation);
    setUpdatedDiscoveryPeriod(starPatternCatalog.discoveryPeriod);
    setUpdatedPatternType(starPatternCatalog.patternType);
    setUpdatedMainStarCount(starPatternCatalog.mainStarCount);
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" onChange={handleUpdatedNameInput}
         value={updatedName} 
         />
      </fieldset>
      <fieldset>
        <label htmlFor="starPattern-translation">Translation: </label>
        <input
          type="text"
          id="starPattern-translation"
          onChange={handleUpdatedTranslationInput}
          value={updatedTranslation}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="starPattern-discoveryPeriod">Discovery period: </label>
        <input
          type="text"
          id="starPattern-discoveryPeriod"
          onChange={handleUpdatedDiscoveryPeriodInput}
          value={updatedDiscoveryPeriod}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="starPattern-patternType">Pattern Type: </label>
        <input
          type="text"
          id="starPattern-patternType"
          onChange={handleUpdatedPatternTypeInput}
          value={updatedPatternType}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="starPattern-mainStarCount">Main Star Count: </label>
        <input
          type="number"
          id="starPattern-mainStarCount"
          onChange={handleUpdatedMainStarCountInput}
          value={updatedMainStarCount}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="starPattern-starPattern">Star Pattern (Name): </label>
        <input
          type="text"
          id="starPattern-starPattern"
          onChange={handleUpdatedStarPatternInput}
          value={updatedStarPattern}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="name">Id: </label>
        <input type="number" id="id" onChange={handleIdInput} value={id} />
      </fieldset>
      <button onClick={handleStarPatternCatalogUpdate}>Update Star Patterns</button>
    </form>
  );
}

export default UpdateStarPatternCatalog;
