import { FunctionComponent } from "react";
import FormContainer from "../components/FormContainer";
import "./Contato.css";

const Contato: FunctionComponent = () => {
  return (
    <div className="contato">
      <header className="navigation">
        <nav className="home-parent">
          <a className="home" href="/">Home</a>
          <div className="sobre-wrapper">
            <a className="sobre" href="/sobre">Sobre</a>
          </div>
          <a className="contato1" href="/contato">Contato</a>
        </nav>
      </header>
      <section className="support-content-parent">
        <div className="support-content">
          <div className="support-message">
            <h1 className="dvidas-e-suporte">
              Dúvidas e suporte, entre em contato:
            </h1>
            <div className="frame-parent">
              <img
                className="frame-child"
                loading="lazy"
                alt=""
                src="/group-1000001749.svg"
              />
              <img
                className="frame-child"
                loading="lazy"
                alt=""
                src="/group-1000001750.svg"
              />
              <img
                className="frame-child"
                loading="lazy"
                alt=""
                src="/group-1000001751.svg"
              />
            </div>
          </div>
        </div>
        <div className="line-wrapper">
          <div className="line-div" />
        </div>
        <div className="form-container-wrapper">
          <FormContainer />
        </div>
      </section>
    </div>
  );
};

export default Contato;
