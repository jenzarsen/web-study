import React from "react";
import "../styles.css";
import contacts from "../contacts.js";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.contact.name}</h2>
        <img
        className ="circle-img"
          src={props.contact.imgURL}
          alt="avatar_img"
        />
      </div>
      <div className="bottom">
        <p className="info">{props.contact.phone}</p>
        <p className="info">{props.contact.email}</p>
      </div>
    </div>
  );
}

function App() {
  var contactList = contacts;

  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card contact={contactList[0]} />
       <Card contact={contactList[1]} />
        <Card contact={contactList[2]} />
    </div>
  );
}

export default App;
