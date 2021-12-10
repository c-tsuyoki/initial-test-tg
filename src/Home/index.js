import "./styles.css";
import { ReactComponent as MainImage } from "./main.svg";

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-actions">
          <h1 className="home-title">
            Conheça as principais <br /> tendências do mercado <br /> de
            tecnologia!!!
          </h1>
          <h3 className="home-subtitle">
            Fique por dentro e conquiste as melhores vagas
          </h3>
          <a href="start" className="home-btn-start">
            COMEÇAR
          </a>
        </div>
        <div className="home-image">
          <MainImage />
        </div>
      </div>
    </div>
  );
}

export default Home;
