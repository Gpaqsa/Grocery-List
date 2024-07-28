import Item from "./Item";

const itemList = ({ items, onDelete, onDone }) => {
  return (
    <ul>
      {items.map((item) => (
        <Item key={item.id} item={item} onDelete={onDelete} onDone={onDone} />
      ))}
    </ul>
  );
};

export default itemList;
