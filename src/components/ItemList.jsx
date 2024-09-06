import { useMemo, useState } from "react";
import EmptyView from "./EmptyView";
import Select from "react-select";
import { useItemsStore } from "../stores/itemsStore";

const sortingOptions = [
  { value: "default", label: "Sort By Default" },
  { value: "packed", label: "Sort by Packed" },
  { value: "unpacked", label: "Sort By Unpacked" },
];

export default function ItemList() {
  const { items, deleteItem, toggleItem } = useItemsStore((state) => ({
    items: state.items,
    deleteItem: state.deleteItem,
    toggleItem: state.toggleItem,
  }));
  const [sortBy, setSortBy] = useState(() => {
    return JSON.parse(window.localStorage.getItem("sortBy")) || "default";
  });

  const sortedItems = useMemo(() => {
    if (sortBy === "packed") {
      return [...items].sort((a, b) => b.packed - a.packed);
    } else if (sortBy === "unpacked") {
      return [...items].sort((a, b) => a.packed - b.packed);
    }
    return items;
  }, [items, sortBy]);

  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyView />}
      {items.length > 0 && (
        <section className="sorting">
          <Select
            defaultValue={sortingOptions.find(
              (option) => option.value === sortBy
            )}
            options={sortingOptions}
            onChange={(option) => {
              window.localStorage.setItem(
                "sortBy",
                JSON.stringify(option.value)
              );
              setSortBy(option.value);
            }}
          ></Select>
        </section>
      )}
      {sortedItems.map((item) => (
        <Item
          key={item.id}
          item={item}
          onDeleteItem={deleteItem}
          onToggleItem={toggleItem}
        />
      ))}
    </ul>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => onToggleItem(item.id)}
        />
        {item.name}
      </label>
      <button className="remove" onClick={() => onDeleteItem(item.id)}>
        X
      </button>
    </li>
  );
}
