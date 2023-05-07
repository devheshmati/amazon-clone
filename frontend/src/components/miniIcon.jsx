export default function MiniIcon({className, img, w, h, x, y }) {
  const style = {
    minWidth: `${w}`,
    maxWidth: `${w}`,
    minHeight: `${h}`,
    maxHeight: `${h}`,
    backgroundImage: `url(${img})`,
    backgroundRepeat: "no-repeat",
    backgroundOrigin: "center-box",
    backgroundPosition: `${x} ${y}` || "center",
  };

  return <div className={className} style={style}></div>;
}
