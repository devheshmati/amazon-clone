import '../styles/categoryItem.scss';

export default function CategoryItem({ item }) {
  const basePath = './src/assets/images/';
  const headerPath = basePath + 'headers/';
  const cardPath = basePath + 'cards/'; 
  const baseUrl = '/products/category/';

  return (
    <div className="category-item">
      {item.type === "card" ? (
        <div className="category-card">
          <a href={baseUrl + item.url}>
            <img src={cardPath + item.cardImg} alt={item.cardAlt} />
            <p>{item.category}</p>
          </a>
        </div>
      ) : (
        <div className="category-header">
          {item.linkActive ? (
            <a href={baseUrl + item.url}>
              <img src={headerPath + item.headerImg} alt={item.headerAlt} />
              <h3>{item.title}</h3>
            </a>
          ) : (
            <div>
              <img src={headerPath + item.headerImg} alt={item.headerAlt} />
              <h3>{item.title}</h3>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
