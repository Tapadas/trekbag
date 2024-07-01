import { useState } from "react";
import { initialItems } from "../constants";

export default function ItemList({ items, setItems }) {
  const handleDelete = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  return (
    <ul>
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          onRemove={() => handleDelete(item.id)}
        />
      ))}
    </ul>
  );
}

function Item({ item, onRemove }) {
  return (
    <li className="item">
      <label>
        <input type="checkbox" defaultChecked={item.packed} />
        {item.name}
      </label>
      <button className="remove" onClick={onRemove}>
        X
      </button>
    </li>
  );
}
