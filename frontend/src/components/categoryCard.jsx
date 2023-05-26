import '../styles/categoryCard.scss';
import CategoryCardItem from "./categoryCardItem";

export default function CategoryCard({ data }) {
  return (
    <div className="categoryCard">
      {data.map((item, index) => (
        <CategoryCardItem key={index} data={item} />
      ))}
    </div>
  );
}
