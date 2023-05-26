import "../styles/gapper.scss";

export default function Gapper({style, children }) {
  return <div style={style} className="gapper">{children}</div>;
}
