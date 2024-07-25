import { useState } from "react";
import ItemInput from "./components/ItemInput"
import ItemList from "./components/itemList.jsx";

const initialGrocery = [
  {
    id: 6865,
    task: "get milk",
    who: "Scott",
    dueDate: "2013-05-19",
    done: false,
  },
  {
    id: 8073,
    task: "get broccoli",
    who: "Elisabeth",
    dueDate: "2013-05-21",
    done: false,
  },
  {
    id: 4373,
    task: "get garlic",
    who: "Trish",
    dueDate: "2013-05-30",
    done: false,
  },
  {
    id: 1234,
    task: "get eggs",
    who: "Josh",
    dueDate: "2013-05-15",
    done: true,
  },
];  

console.log(initialGrocery)
const App = () => {

  const [items, setItems] = useState(initialGrocery)

  return (
    <div className="app">
      <h1>Grocery List</h1>
      <ItemInput />
      <ItemList items={ items } />
    </div>
  )
}

export default App
