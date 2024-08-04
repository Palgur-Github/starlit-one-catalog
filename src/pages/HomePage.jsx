import HomeHeader from "../components/HomeHeader";
import celestialSphere from "../assets/celestialSphere.jpeg"
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
    <section className = "home-page">
    <div className= "celestial-sphere">
    <img src={celestialSphere} className= "cetestial-sphere-img"/>
      <h1>Starlit One Catalog</h1>
      <p>...Endeavoring pathways toward the stars</p>
      <br/>
    </div>
    </section>
    <section className= "container">
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
