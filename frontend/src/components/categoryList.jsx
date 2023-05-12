import "../styles/categoryList.scss";
import CategoryItem from './categoryItem';

export default function CategoryList({ categories }) {
  return (
    <>
      <div className="category-list">
        {categories.map(item => <CategoryItem key={item.id} item={item} />)}
      </div>
    </>
  );
}
