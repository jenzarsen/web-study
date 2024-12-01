import React, { useState } from "react";
import ListItem from "./ListItem.jsx";

function App() {
  var count = 0;
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState("");

  function handleChange(event) {
    console.log(event.target);
    const { value } = event.target;
    setCurrentItem(value);
  }
  function handleClick(event) {
    setItems((prevItems) => {
        return [...prevItems, currentItem]
    });
    setCurrentItem("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={currentItem} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((itemEntry) => (
            <ListItem text={itemEntry} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
