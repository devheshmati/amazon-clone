import { useState, useEffect } from "react";

export default function DragAndDropableList({ data }) {
  const [currItem, setCurrItem] = useState(0);
  useEffect(() => {
    console.log(data);
  });

  const handleDrag = (index) => {
    setCurrItem(index);
    console.log(index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (index) => {
    // swap a with b in state
  };

  return (
    <div className="dragAndDropableList">
      <ul>
        {data.map((item, index) => (
          <li
            key={index}
            draggable={true}
            onDragStart={(e) => handleDrag(index)}
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(index)}
          >
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
