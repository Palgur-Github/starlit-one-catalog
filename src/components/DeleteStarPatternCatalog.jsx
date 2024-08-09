function DeleteStarPatternCatalog({ starPatternCatalog, deleteStarPatternCatalog }) {
    const handleStarPatternCatalogDelete = () => {
      deleteStarPatternCatalog(starPatternCatalog.id);
    }
  
    return (
      <button onClick={handleStarPatternCatalogDelete}>Delete Star Patterns</button>
    );
  }
  
  export default DeleteStarPatternCatalog;