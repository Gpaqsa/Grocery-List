import Button from "./Button";

const Item = ({ item, onDelete, onDone }) => {
  return (
    <li className={`item ${item.done ? "complete" : ""}`}>
      <h3>{item.task}</h3>
      <span>{item.dueDate}</span>
      <Button onClick={() => onDone(item.id)}>✅</Button>
      <Button onClick={() => onDelete(item.id)}>🗑</Button>{" "}
      {/* Pass a function reference */}
    </li>
  );
};

export default Item;
