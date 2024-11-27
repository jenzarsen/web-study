// import animals, {useAnimals} from "./data.js";
// import React, { useState } from "react";

// console.log(animals);
// //Destructuring Arrays uses square brackets [ ] and can have different names
// const [cat, dog] = useState(animals);
// console.log(cat);

// //Destructuring Objects uses curly braces { } but needs to have the exact same property
// //Cat Name and Cat Sound is renamed
// const { name: catName, sound: catSound } = cat;

// //Sets Default Value for JS Objects in case it is empty
// //const { name = "Fluffy", sound = "Purr" } = cat;

// //Extensive Destructuring of JSON Objects inside a JSON Object
// const { name, sound, feedingRequirements: {food, water}} = cat;

// console.log(food);

// const [animal, makeSound] = useAnimals(cat);

// console.log(animal);
// makeSound();

//CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice.js";

const [honda, tesla] = cars;

const {
  coloursByPopularity: [ teslaTopColour ],
  speedStats: { topSpeed: teslaTopSpeed },
} = tesla;
const {
  coloursByPopularity: [hondaTopColour ],
  speedStats: { topSpeed: hondaTopSpeed },
} = honda;

ReactDOM.render(
  <div>
    <table>
      <tr>
        <th>Brand</th>
        <th>Top Speed</th>
      </tr>
      <tr>
        <td>{tesla.model}</td>
        <td>{teslaTopSpeed}</td>
        <td>{teslaTopColour}</td>
      </tr>
      <tr>
        <td>{honda.model}</td>
        <td>{hondaTopSpeed}</td>
        <td>{hondaTopColour}</td>
      </tr>
    </table>
  </div>,
  document.getElementById("root")
);
