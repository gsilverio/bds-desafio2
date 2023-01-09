import { Link } from "react-router-dom";

import "./styles.css";
const Home = () => {
  return (
    <>
      <div className="home-container bg-secundary">
        <h2>Desafio GitHub API</h2>
        <p>DevSuperior - Escola de programação </p>
        <div>
          <Link to="/searchprofile">
            <button className="home-button">
              <h3>Começar</h3>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
