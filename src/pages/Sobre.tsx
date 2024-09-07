import { FunctionComponent } from "react";
import FrameComponent3 from "../components/FrameComponent3";
import Main from "../components/Main";
import "./Sobre.css";

const Sobre: FunctionComponent = () => {
  return (
    <div className="sobre2">
      <main className="frame-container">
        <header className="frame-wrapper">
          <FrameComponent3 />
        </header>
        <Main />
      </main>
      <div className="footer-navigation">
        <div className="footer-links">
          <div className="view-all">
            {`Challenge `}
            <span className="copyright">{`FIAP 1ESPV`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
