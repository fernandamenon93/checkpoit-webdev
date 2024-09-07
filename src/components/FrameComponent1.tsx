import { FunctionComponent } from "react";
import "./FrameComponent1.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={`frame-div ${className}`}>
      <div className="frame-wrapper1">
        <div className="crie-seus-vdeos-online-parent">
          <h1 className="crie-seus-vdeos">Crie seus vídeos online</h1>
          <div className="transforme-suas-ideias">
            Transforme suas ideias em filmes memoráveis: onde a criatividade
            encontra a simplicidade.
          </div>
          <button className="primary-button">
            <div className="comear-agora">Começar agora!</div>
          </button>
        </div>
      </div>
      <img
        className="hero-image-icon"
        loading="lazy"
        alt=""
        src="/hero-image.svg"
      />
    </div>
  );
};

export default FrameComponent1;
