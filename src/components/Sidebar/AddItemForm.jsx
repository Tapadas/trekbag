import { useRef, useState } from "react";
import Button from "../Button";

export default function AddItemForm({ setItems }) {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(itemText);
    if (!itemText) {
      alert("Please enter an item");
      inputRef.current.focus();
      return;
    }
    setItems((prevItems) => {
      return [
        ...prevItems,
        {
          id: new Date().getTime(),
          name: itemText,
          packed: false,
        },
      ];
    });
    setItemText("");
    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an Item</h2>
      <input
        type="text"
        ref={inputRef}
        value={itemText}
        onChange={(e) => setItemText(e.target.value)}
        autoFocus={true}
      />
      <Button>Add to list</Button>
    </form>
  );
}
