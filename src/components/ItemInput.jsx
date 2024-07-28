import { useState } from "react";

const ItemInput = ({ onAddItem }) => {
  const [newItemInput, setNewItemInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newItemInput.trim()) return;

    const id = crypto.randomUUID();
    const newItem = {
      id,
      task: newItemInput,
      dueDate: new Date().toISOString().split("T")[0], // Capturing the full date in YYYY-MM-DD format
      done: false,
    };

    onAddItem(newItem);
    setNewItemInput("");
  };

  return (
    <form className="form-item-input" onSubmit={handleSubmit}>
      <section className="InputContainer">
        <input
          type="text"
          className="input"
          value={newItemInput}
          onChange={(e) => setNewItemInput(e.target.value)}
          placeholder="Enter new item"
        />
      </section>
      <button className="addBtn" type="submit">
        Add Item
      </button>
    </form>
  );
};

export default ItemInput;
