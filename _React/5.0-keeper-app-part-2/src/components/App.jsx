import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes.js";

function App() {
  return (
    <div>
      <Header />
      {notes.map((x) => (
        <Note key={x.content} title={x.title} content={x.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
