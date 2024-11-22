import React from "react";

function Footer() {
  const date = new Date();
  const currentYear = date.getYear();
  return (
    <footer>
      <p>©Copyright Jenz Alabado {currentYear}</p>
    </footer>
  );
}

export default Footer;
