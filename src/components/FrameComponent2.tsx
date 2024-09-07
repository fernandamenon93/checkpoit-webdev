import { FunctionComponent } from "react";
import "./FrameComponent2.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <section className={`cards-wrapper ${className}`}>
      <div className="cards">
        <div className="card-grid">
          <div className="select-one-or-multip">
            <div className="select-one-or">01</div>
            <div className="platform-names">
              <a className="youtube">Youtube</a>
              <div className="produza-contedo-cativante">
                Produza conteúdo cativante e conquiste seu público com vídeos de
                alta qualidade no maior palco digital do mundo.
              </div>
            </div>
            <img
              className="waterview-room-icon"
              loading="lazy"
              alt=""
              src="/ellipse-27@2x.png"
            />
          </div>
        </div>
        <div className="a-standard-room-but-with-water">
          <div className="select-one-or-multip">
            <div className="div">02</div>
            <div className="platform-names">
              <h2 className="tiktok">Tiktok</h2>
              <div className="produza-contedo-cativante">
                Faça sua criatividade brilhar em vídeos curtos e envolventes que
                vão cativar a comunidade global do TikTok.
              </div>
            </div>
            <img
              className="waterview-room-icon"
              loading="lazy"
              alt=""
              src="/ellipse-26@2x.png"
            />
          </div>
        </div>
        <div className="iconcalendar">
          <div className="select-one-or-multip">
            <div className="div">03</div>
            <div className="platform-names">
              <a className="youtube">Facebook</a>
              <div className="produza-contedo-cativante">
                Conecte-se com sua audiência de forma autêntica e impactante
                através de vídeos que se destacam no feed do Facebook.
              </div>
            </div>
            <img
              className="label-child"
              loading="lazy"
              alt=""
              src="/ellipse-26-1@2x.png"
            />
          </div>
        </div>
        <div className="input-wrapper">
          <div className="select-one-or-multip">
            <div className="div">04</div>
            <div className="platform-names">
              <h2 className="instagram">Instagram</h2>
              <div className="produza-contedo-cativante">
                Compartilhe suas histórias de maneira única e conquiste milhões
                de likes no Instagram utilizando Stories e Reels.
              </div>
            </div>
            <img
              className="label-child"
              loading="lazy"
              alt=""
              src="/ellipse-27-1@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
