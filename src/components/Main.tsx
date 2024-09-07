import { FunctionComponent } from "react";
import FrameComponent from "./FrameComponent";
import "./Main.css";

export type MainType = {
  className?: string;
};

const Main: FunctionComponent<MainType> = ({ className = "" }) => {
  return (
    <section className={`main ${className}`}>
      <div className="main-child" />
      <div className="gallery-header">
        <div className="view-all5">Planos</div>
      </div>
      <form className="gallery-items">
        <div className="item-parent">
          <button className="item1">
            <img className="item-child" alt="" src="/rectangle-18.svg" />
            <b className="view-all6">Individual</b>
          </button>
          <FrameComponent
            viewAll="1 usuário"
            vdeos="10 vídeos"
            r=" r$"
            prop="15"
          />
          <div className="vector-group">
            <img className="item-item" alt="" src="/rectangle-12.svg" />
            <img
              className="chevron-right-icon1"
              loading="lazy"
              alt=""
              src="/chevronright@2x.png"
            />
          </div>
          <div className="item-container">
            <button className="item3">
              <div className="item-inner" />
              <b className="view-all7">Cadastrar</b>
            </button>
          </div>
        </div>
        <div className="item-parent">
          <div className="vector-parent">
            <img className="item-child" alt="" src="/rectangle-20.svg" />
            <b className="view-all8">Profissional - Times</b>
          </div>
          <FrameComponent
            viewAll="1-10 Usuários"
            propMinWidth="98px"
            propBoxShadow="unset"
            propWidth="173px"
            vdeos="vídeos ilimitados"
            r=" R$"
            prop="40"
            rFontSize1="unset"
            rFontFamily1="'Roboto Mono'"
          />
          <div className="vector-group">
            <img className="item-item" alt="" src="/rectangle-12.svg" />
            <img
              className="chevron-right-icon2"
              loading="lazy"
              alt=""
              src="/chevronright@2x.png"
            />
          </div>
          <FrameComponent
            viewAll="+10 Usuários"
            propMinWidth="91px"
            propBoxShadow="unset"
            propWidth="173px"
            vdeos="Vídeos ilimitados "
            r="R$"
            prop="20"
            rFontSize1="unset"
            rFontFamily1="'Roboto Mono'"
          />
          <div className="item-container">
            <button className="item4">
              <div className="item-child1" />
              <b className="view-all9">Cadastrar</b>
            </button>
          </div>
        </div>
        <div className="frame-parent5">
          <div className="vector-parent">
            <img className="item-child" alt="" src="/rectangle-20.svg" />
            <b className="view-all10">Corporativo</b>
          </div>
          <div className="item-container">
            <div className="rectangle-group">
              <div className="item-child1" />
              <b className="view-all11">Entre em contato</b>
            </div>
          </div>
          <div className="vector-group">
            <img className="item-item" alt="" src="/rectangle-12.svg" />
            <img
              className="undraw-mobile-feed-re-72ta-1-icon"
              loading="lazy"
              alt=""
              src="/undraw-mobile-feed-re-72ta-1.svg"
            />
          </div>
        </div>
      </form>
    </section>
  );
};

export default Main;
