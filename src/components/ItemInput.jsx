import { useState } from "react";

const ItemInput = ({ onAddItem }) => {
  const [newItemInput, setNewItemInput] = useState("");
  const [date, setDate] = useState(new Date().getDate());
  const handleSubmit = (e) => {
    e.preventDefault();

    const id = crypto.randomUUID();
    const newItem = {
      id,
      task: newItemInput, // Change the property name to something more descriptive
      dueDate: date,
      done: true,
    };

    onAddItem(newItem);
    setNewItemInput("");
    setDate(new Date().getDate());
  };

  return (
    <form className="form-item-input" onSubmit={handleSubmit}>
      <section className="InputContainer">
        <input
          type="text"
          className="input"
          value={newItemInput}
          onChange={(e) => setNewItemInput(e.target.value)}
        />
      </section>
      <button className="addBtn">Add Item</button>
    </form>
  );
};

export default ItemInput;
