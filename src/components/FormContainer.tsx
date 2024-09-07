import { FunctionComponent } from "react";
import Default from "./Default";
import "./FormContainer.css";

export type FormContainerType = {
  className?: string;
};

const FormContainer: FunctionComponent<FormContainerType> = ({
  className = "",
}) => {
  return (
    <div className={`form-container ${className}`}>
      <div className="form-fields">
        <div className="name-field">
        <div className="email-labels">
            <div className="e-mail">Nome:</div>
            <div className="e-mail1">Nome:</div>
          </div>
          <div className="default1">
            <div className="light">
              <input className="bg-light" type="text" />
            </div>
          </div>
        </div>
        <div className="name-field">
          <div className="email-labels">
            <div className="e-mail">E-mail:</div>
            <div className="e-mail1">E-mail:</div>
          </div>
          <div className="email-input-background">
            <div className="default2">
              <div className="light1">
                <input className="bg-light" type="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="message-field">
        <div className="mensagem">Mensagem:</div>
        <Default />
      </div>
      <button className="rectangle-parent">
        <div className="rectangle-div" />
        <b className="view-all2">Enviar</b>
      </button>
    </div>
  );
};

export default FormContainer;
