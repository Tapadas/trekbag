const items = [
  {
    name: "item 1",
    packed: true,
  },
  {
    name: "item 2",
    packed: false,
  },
  {
    name: "item 3",
    packed: false,
  },
];
export default function ItemList() {
  return (
    <ul>
      {items.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </ul>
  );
}

function Item({ item }) {
  return (
    <li className="item">
      <label>
        <input type="checkbox" checked={item.packed} />
        {item.name}
      </label>
    </li>
  );
}
