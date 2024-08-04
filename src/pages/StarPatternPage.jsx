import StarPatternPageHeader from "../components/StarPatternPageHeader";
import Footer from "../components/Footer";
import "./StarPatternPage.css";

function StarPatternPage(){

    return (
        <body>
        <header>
        <div>
         <StarPatternPageHeader></StarPatternPageHeader>
        </div>
        </header>
        <section className ="star-pattern-page">
          <div className = "star-pattern-page-image">
          <h1>Stars Patterns</h1>
          <div className = "container">
          <p>Coming soon</p>
          <p> * </p>
          <p> * </p>
          <p> * </p>
          <p> * </p>
          <p> * </p>
          <p> * </p>
          </div>
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