import "../styles/gapper.scss";

export default function Gapper({ className, style, children }) {
  return (
    <div style={style} className={`${className} gapper`}>
      {children}
    </div>
  );
}
