import { useState, useEffect } from "react";
import "../../styles/superAdminCategory.scss";
import Container from "../../components/container";
import DragAndDropableList from "../../components/dragAndDropableList";
import { useSelector, useDispatch } from "react-redux";
import { AddCategory } from "../../redux/actions/index";

export default function SuperAdminCategories() {
  const [inputVal, setInputVal] = useState({ title: "" });
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // dispatch AddCategory
    dispatch(AddCategory(inputVal));
  };

  return (
    <Container style={{ margin: "2rem" }}>
      <div className="form-frame">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            name="category"
            type="text"
            value={inputVal.title}
            placeholder="category name"
            onChange={(e) => setInputVal({ title: e.target.value })}
          />
          <button type="submit">+</button>
        </form>
      </div>
      <div className="list-frame">
        {categories.items && <DragAndDropableList data={categories.items} />}
      </div>
    </Container>
  );
}
