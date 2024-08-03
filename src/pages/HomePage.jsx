import HomeHeader from "../components/HomeHeader";
import celestialSphere from "../assets/celestialSphere.jpeg"
import "./HomePage.css";
import starlitOneLogo from '../assets/starlitOneLogo.png';

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
      <br/>
    </div>
    </section>
    <section className= "container">
    </section>
    <footer>
      <p>Copyright © 2024 Starlit One Catalog
      </p>
    </footer>
    </body>
  );
}

export default HomePage;
