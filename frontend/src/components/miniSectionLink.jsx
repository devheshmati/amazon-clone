import "../styles/miniSectionLink.scss";

export default function MiniSectionLink({ data }) {
  return (
    <div className="mini-section-link">
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <a href={item.url}>
              <h4>{item.title}</h4>
              <p>{item.context}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
