import Button from "./Button";

const Item = ({ item, onDelete }) => {
  return (
    <li className="item">
      <h3>{item.task}</h3>
      <span>{item.dueDate}</span>
      <Button>✅</Button>
      <Button onClick={() => onDelete(item.id)}>🗑</Button>{" "}
      {/* Pass a function reference */}
    </li>
  );
};

export default Item;
