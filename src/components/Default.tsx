import { FunctionComponent } from "react";
import "./Default.css";

export type DefaultType = {
  className?: string;
};

const Default: FunctionComponent<DefaultType> = ({ className = "" }) => {
  return <textarea className={`default ${className}`} rows={11} cols={25} />;
};

export default Default;
