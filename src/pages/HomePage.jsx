import HomeHeader from "../components/HomeHeader";
import celestialSphere from "../assets/celestialSphere.jpeg"
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
    <div>
      <img src={celestialSphere} className= "cetestial-sphere"/>
      <h1>Starlit One Catalog</h1>
      <p>...Endeavoring pathways toward the stars</p>
    </div>
    </section>
    </body>
  );
}

export default HomePage;
