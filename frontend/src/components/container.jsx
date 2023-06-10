import "../styles/container.scss";

export default function Container({ className, style, children }) {
  return (
    <div
      className={`${className && className} container`}
      style={style && style}
    >
      {children}
    </div>
  );
}
