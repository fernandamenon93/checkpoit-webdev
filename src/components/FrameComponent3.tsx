import { FunctionComponent } from "react";
import "./FrameComponent3.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <div className={`frame-parent1 ${className}`}>
      <div className="frame-parent2">
        <div className="frame-parent3">
          <div className="home-wrapper">
            <a className="home3" href="/">Home</a>
          </div>
          <div className="bem-vindo-revoluo-dos-vde-parent">
            <h1 className="bem-vindo-revoluo">
              Bem-vindo à revolução dos vídeos!
            </h1>
            <div className="somos-uma-startup">
              Somos uma startup com o objetivo de facilitar a produção de
              conteúdo em larga escala com qualidade profissional, capaz de
              atingir uma audiência de milhões de seguidores.
            </div>
            <button className="primary-button1">
              <div className="baixe-o-app">Baixe o app</div>
            </button>
          </div>
        </div>
        <a className="sobre3" href="/sobre">Sobre</a>
      </div>
      <div className="footer">
        <div className="contato-wrapper">
          <a className="contato3" href="/contato">Contato</a>
        </div>
        <div className="viseo-merge-screen-1-parent">
          <img
            className="viseo-merge-screen-1"
            loading="lazy"
            alt=""
            src="/viseo-merge-screen-1@2x.png"
          />
          <img
            className="saved-1-icon"
            loading="lazy"
            alt=""
            src="/saved-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
