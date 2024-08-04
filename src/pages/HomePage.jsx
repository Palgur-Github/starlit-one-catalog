import HomeHeader from "../components/HomeHeader";
import celestialSphere from "../assets/celestialSphere.jpeg";
import constellations from "../assets/constellations.jpeg";
import celestialPlanisphere from "../assets/celestialPlanisphere.png";
import summerTriangleAsterism from "../assets/summerTriangleAsterism.jpeg";
import Footer from "../components/Footer";
import "./HomePage.css";

function HomePage() {
  return (
    <body>
      <header>
        <div>
          <HomeHeader></HomeHeader>
        </div>
      </header>
      <section className="home-page">
        <div className="celestial-sphere">
          <img src={celestialSphere} className="cetestial-sphere-image" />
          <h1>Starlit One Catalog</h1>
          <p>...Endeavoring pathways toward the stars</p>
          <br />
        </div>
      </section>
      <section className="container"></section>
      <section className="decide-your-path">
        <h2 className="request">Decide Your Path</h2>
        <div className="panel">
          <div className="container">
            <div className="constellations">
              <img src={constellations} className="constellation-image" />
            </div>
            <div>
              <h3 className="title">Star Patterns</h3>
            </div>
            <div className="text">
              <p>
                Cards of constellations
                <br />
                and asterisms
              </p>
            </div>
          </div>
          <div className="container">
            <div className="celestial-planisphere">
              <img
                src={celestialPlanisphere}
                className="celestial-planisphere-image"
              />
            </div>
            <div>
              <h3 className="title"> The Star Pattern Catalog</h3>
            </div>
            <div className="text">
              <p>
                A collection of star patterns
                <br />
                and their properties
              </p>
            </div>
          </div>
          <div className="container">
            <div className="summer-triangle">
              <img src={summerTriangleAsterism} class="summer-triangle-image" />
            </div>
            <div>
              <h3 className="title">The Stars Catalog</h3>
            </div>
            <div className="text">
              <p>
                A collection of stars
                <br />
                belonging to the star
                <br />
                patterns
              </p>
            </div>
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

export default HomePage;
