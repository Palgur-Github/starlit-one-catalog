import {useState, useEffect} from "react";
import StarPatternCatalogHeader from "../components/StarPatternCatalogHeader";
import Footer from "../components/Footer";
import "./StarPatternCatalog.css";
import StarPatternCatalogCard from "../components/StarPatternCatalogCard";
import CreateStarPatternCatalog from "../components/CreateStarPatternCatalog";
function StarPatternCatalog() {
  const [starPatternCatalogs, setStarPatternCatalogs] = useState([]);

  const getStarPatternCatalogs = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/starPatterns");
      const data = await response.json();
      console.log(data);
      setStarPatternCatalogs(data);
    } catch (e) {
      console.log(e);
    }
  };

  const createStarPatternCatalog = async (newStarPatternCatalog) => {
    try {
      console.log(JSON.stringify(newStarPatternCatalog));
      await fetch("http://localhost:8080/api/starPatterns", {
        method: "POST",
        body: JSON.stringify(newStarPatternCatalog),
        headers: {
          "Content-Type": "application/json",
        }
      })

      getStarPatternCatalogs();
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getStarPatternCatalogs();
  }, []);

  const StarPatternCatalogCards = starPatternCatalogs.map((starPatternCatalog) => {
    return (
      <li key={starPatternCatalog.id}>
        <StarPatternCatalogCard starPatternCatalog={starPatternCatalog}></StarPatternCatalogCard>
      </li>
    );
  });

  return (
    <body>
    <header>
    <div>
      <StarPatternCatalogHeader></StarPatternCatalogHeader>
    </div>
    </header>
    <section className ="star-pattern-catalog">
      <div className = "star-pattern-catalog-image">
      <h1>The Star Pattern Catalog</h1>
<CreateStarPatternCatalog createStarPatternCatalog={createStarPatternCatalog}></CreateStarPatternCatalog>
        <ul className = "star-pattern-catalog-cards">{StarPatternCatalogCards}</ul>
     </div>
    </section>
        <footer>
        <div>
        <Footer></Footer>
        </div>
      </footer>
      </body>
  );
}

export default StarPatternCatalog;
