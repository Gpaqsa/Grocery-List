import Item from "./Item";

const itemList = ({ items }) => {
  console.log(items);
  return (
    <ul>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default itemList;
