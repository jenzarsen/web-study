import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    text: "",
  });
  const [text, setText] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevValue) => {
      switch (name) {
        case "title": {
          return {
            title: value,
            text: prevValue.text,
          };
        }
        case "content": {
          return {
            title: prevValue.title,
            text: value,
          };
        }
      }
    });
  }

  function handleClick(event) {
    props.onCreateNote(note);
    setNote({title:"",text:""});
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.text}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
