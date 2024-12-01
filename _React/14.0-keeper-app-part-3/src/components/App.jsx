import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevItems) => {
      return [...prevItems, note];
    });
    console.log(notes.length);
  }

  function deleteNote(id) {
    setNotes((prevItems) => {
      //Return All Items that is not the same as delete id
      return prevItems.filter((item, index) => index !== id);
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onCreateNote={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.text}
          onDelete={deleteNote}
        />
      ))}
      ;
      <Footer />
    </div>
  );
}

export default App;
