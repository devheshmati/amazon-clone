import symbolset1 from "../assets/images/symbolset1.png";
import MiniIcon from "./miniIcon";
import "../styles/sectionLink.scss";

export default function SectionLink({ item }) {
  return (
    <div className={`section-link col-${item.id}`}>
      <ul>
        <li>
          <h3>{item.title}</h3>
        </li>
        {item.links.map((link) =>
          link.arrowSign ? (
            <li key={link.id} className="with-as">
              <a href={link.url}>
                <span>
                  <MiniIcon
                    img={symbolset1}
                    w={"10px"}
                    h={"15px"}
                    x={"-107px"}
                    y={"-356px"}
                  />
                </span>
                {link.title}
              </a>
            </li>
          ) : (
            <li key={link.id}>
              <a href={link.url}>{link.title}</a>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
