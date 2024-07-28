import { useState, useEffect } from "react";
import ItemInput from "./components/ItemInput";
import ItemList from "./components/itemList.jsx";

const initialGrocery = [
  {
    id: 6865,
    task: "get milk",
    dueDate: "2013-05-19",
    done: false,
  },
  {
    id: 8073,
    task: "get broccoli",
    dueDate: "2013-05-21",
    done: false,
  },
  {
    id: 4373,
    task: "get garlic",
    dueDate: "2013-05-30",
    done: false,
  },
  {
    id: 1234,
    task: "get eggs",
    dueDate: "2013-05-15",
    done: true,
  },
];

// console.log(initialGrocery);
const App = () => {
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem("items");
    return savedItems ? JSON.parse(savedItems) : initialGrocery;
  });

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const handleAddItem = (newItem) => {
    setItems((items) => [...items, newItem]);
  };

  const handleDeleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    console.log(id);
  };

  const handleToggleComplete = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };
  return (
    <div className="app">
      <h1>Grocery List</h1>
      <ItemInput onAddItem={handleAddItem} />
      <ItemList
        items={items}
        onDelete={handleDeleteItem}
        onDone={handleToggleComplete}
      />
    </div>
  );
};

export default App;
