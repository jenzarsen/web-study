import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [isClicked, setClicked] = useState(false);
  function handleChange(event) {
    setName(event.target.value);
    setClicked(false);
  }

  function handleClick(event) {
    setClicked(true);
    event.preventDefault();
  }
  return (
    <div className="container">
      <h1>Hello {isClicked && name}</h1>
      <form>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit" onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}

export default App;
