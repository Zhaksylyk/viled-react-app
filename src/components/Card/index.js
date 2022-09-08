import React from "react";
import "./style.css";
import Grid from "@mui/material/Grid";

const Card = ({ name = "", category = "", price = 0, url = "" }) => {
  return (
    <div className="card">
      <div>Photo</div>
      <p>{name}</p>
      <p>{category}</p>
      <p>{price}</p>
    </div>
  );
};

export default Card;
