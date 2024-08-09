import DeleteStarPatternCatalog from "./DeleteStarPatternCatalog";
import UpdateStarPatternCatalog from "./UpdateStarPatternCatalog";
function StarPatternCatalogCard(props) {
  const { starPatternCatalog, updateStarPatternCatalog, deleteStarPatternCatalog } = props;

  return (
    <article>
      <h2>Name : {starPatternCatalog.name}</h2>
      <p>Translation : {starPatternCatalog.translation}</p>
      <p>Discovery Period : {starPatternCatalog.discoveryPeriod}</p>
      <p>Pattern Type : {starPatternCatalog.patternType} </p>
      <p>Main Star Count : {starPatternCatalog.mainStarCount}</p>
      <p>Star Pattern : {starPatternCatalog.starPattern}</p>
      <p>Id : {starPatternCatalog.id}</p>
      <UpdateStarPatternCatalog starPatternCatalog={starPatternCatalog} updateStarPatternCatalog={updateStarPatternCatalog} />
      <DeleteStarPatternCatalog starPatternCatalog={starPatternCatalog} deleteStarPatternCatalog={deleteStarPatternCatalog} />
    </article>
  );
}

export default StarPatternCatalogCard;