import { useState } from "react";
import { Icon } from "@iconify/react";
import '../styles/dragAndDropableList.scss';

export default function DragAndDropableList({ data }) {
  const [currItem, setCurrItem] = useState(0);
  const [categories, handleSwap, handleUpdate, handleDelete] = data;

  const handleDrag = (index) => {
    setCurrItem(index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (index) => {
    // swap a with b in state
    const temp = categories[currItem];
    categories[currItem] = categories[index];
    categories[index] = temp;
    handleSwap(categories);
  };

  return (
    <div className="dragAndDropableList">
      <ul>
        {categories.map((item, index) => (
          <li
            key={index}
            draggable
            onDragStart={() => handleDrag(index)}
            onDragOver={(e) => handleDragOver(e)}
            onDrop={() => handleDrop(index)}
          >
            <span>{item.title}</span>
            <div className="btns-frame">
              <button>
                <Icon icon="material-symbols:edit-outline" />
              </button>
              <button onClick={() => handleDelete(index)}>
                <Icon icon="iconoir:trash" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
