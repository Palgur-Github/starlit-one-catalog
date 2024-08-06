import { useState } from "react";
import StarPatternPageHeader from "../components/StarPatternPageHeader";
import Footer from "../components/Footer";
import StarPatternList from "../components/StarPatternList";
import "./StarPatternPage.css";

function StarPatternPage(){

  const [showStarPatterns, setShowStarPatterns] = useState(true);

    return (
        <body>
        <header>
        <div>
         <StarPatternPageHeader></StarPatternPageHeader>
        </div>
        </header>
        <section className ="star-pattern-page">
          <div className = "star-pattern-page-image">
            <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
                 <button onClick={() => setShowStarPatterns(!showStarPatterns)}>Refresh Star Pattern Cards</button>
      {showStarPatterns && <StarPatternList></StarPatternList>}
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

export default StarPatternPage;