import React, {useState} from "react";

function App() {

  const [headingText, setHeadingText] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);

  function handleClick(){
     setHeadingText("Submitted");
  }

  function handleMouseOut(){
    setMouseOver(false);
  }

  function handleMouseOver(){
    setMouseOver(true);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{backgroundColor : isMouseOver? "black" : "white"}} onClick={handleClick} onMouseOut={handleMouseOut} onMouseOver={handleMouseOver}>Submit</button>
    </div>
  );
}

export default App;
