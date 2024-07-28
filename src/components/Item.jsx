import Button from "./Button"

const Item = ({ item }) => {
  return (
    <li className="item">
      {/* <div> */}
      <h3>{item.task}</h3>
      <span>{item.dueDate}</span>
      {/* </div> */}

      <Button>✅</Button>
      <Button>🗑</Button>
    </li>
  );
};

export default Item
