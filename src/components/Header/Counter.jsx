import { useItemsStore } from "../../stores/itemsStore";

export default function Counter() {
  const items = useItemsStore((state) => state.items);

  const numberOfItemsPacked = items.filter((item) => item.packed).length;
  return (
    <p>
      <b>{numberOfItemsPacked}</b> / {items.length} items packed
    </p>
  );
}
