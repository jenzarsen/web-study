import React from "react";
import Avatar from "./Avatar.jsx";
import Detail from "./Detail.jsx";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <Detail info={props.tel} />
        <Detail info={props.email} />
      </div>
    </div>
  );
}

export default Card;
