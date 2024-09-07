import { FunctionComponent } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent2 from "../components/FrameComponent2";
import "./Home.css";

const Home: FunctionComponent = () => {
  return (
    <div className="home1">
      <section className="frame-group">
        <header className="deal-information-wrapper">
          <nav className="deal-information">
            <a className="home2" href="/">Home</a>
            <div className="sobre-container">
              <a className="sobre1" href="/sobre">Sobre</a>
            </div>
            <a className="contato2" href="/contato">Contato</a>
          </nav>
        </header>
        <FrameComponent1 />
      </section>
      <FrameComponent2 />
    </div>
  );
};

export default Home;
