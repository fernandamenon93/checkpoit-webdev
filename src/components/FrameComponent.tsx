import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./FrameComponent.css";

export type FrameComponentType = {
  className?: string;
  viewAll?: string;
  vdeos?: string;
  r?: string;
  prop?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propBoxShadow?: CSSProperties["boxShadow"];
  propWidth?: CSSProperties["width"];
  rFontSize?: CSSProperties["fontSize"];
  rFontFamily?: CSSProperties["fontFamily"];
  rFontSize1?: CSSProperties["fontSize"];
  rFontFamily1?: CSSProperties["fontFamily"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  viewAll,
  propMinWidth,
  propBoxShadow,
  propWidth,
  vdeos,
  r,
  prop,
  rFontSize,
  rFontFamily,
  rFontSize1,
  rFontFamily1,
}) => {
  const viewAllStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const bGLightStyle: CSSProperties = useMemo(() => {
    return {
      boxShadow: propBoxShadow,
    };
  }, [propBoxShadow]);

  const viewAll1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const rStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: rFontSize1,
      fontFamily: rFontFamily1,
    };
  }, [rFontSize1, rFontFamily1]);

  return (
    <div className={`item-wrapper ${className}`}>
      <div className="item">
        <div className="item-view-all">
          <div className="view-all3" style={viewAllStyle}>
            {viewAll}
          </div>
        </div>
        <div className="item-content">
          <div className="default3">
            <div className="light2">
              <div className="bg-light2" style={bGLightStyle} />
            </div>
          </div>
          <div className="view-all4" style={viewAll1Style}>
            <span>
              <span>{vdeos}</span>
              <b className="r" style={rStyle}>
                {r}
              </b>
            </span>
            <b className="r">
              <span>{prop}</span>
            </b>
          </div>
          <div className="item-navigation">
            <img
              className="chevron-right-icon"
              alt=""
              src="/chevronright@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
