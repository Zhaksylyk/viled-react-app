import React from "react";
import Card from "../Card";
import "./style.css";
import Grid from "@mui/material/Grid";

const Content = () => {
  const contentList = [
    {
      id: 1,
      name: "Brunello Cucinelli",
      category: "Лоферы",
      categoryId: 11,
      price: 511900,
      photoUrl: "",
    },
    {
      id: 2,
      name: "Brunello Cucinelli",
      category: "Лоферы",
      categoryId: 11,
      price: 511900,
      photoUrl: "",
    },
    {
      id: 3,
      name: "Brunello Cucinelli",
      category: "Лоферы",
      categoryId: 11,
      price: 511900,
      photoUrl: "",
    },
    {
      id: 4,
      name: "Brunello Cucinelli",
      category: "Лоферы",
      categoryId: 11,
      price: 511900,
      photoUrl: "",
    },
    {
      id: 5,
      name: "Brunello Cucinelli",
      category: "Лоферы",
      categoryId: 11,
      price: 511900,
      photoUrl: "",
    },
    {
      id: 6,
      name: "Brunello Cucinelli",
      category: "Лоферы",
      categoryId: 11,
      price: 511900,
      photoUrl: "",
    },
    {
      id: 7,
      name: "Brunello Cucinelli",
      category: "Лоферы",
      categoryId: 11,
      price: 511900,
      photoUrl: "",
    },
    {
      id: 8,
      name: "Brunello Cucinelli",
      category: "Лоферы",
      categoryId: 11,
      price: 511900,
      photoUrl: "",
    },
    {
      id: 9,
      name: "Brunello Cucinelli",
      category: "Лоферы",
      categoryId: 11,
      price: 511900,
      photoUrl: "",
    },
    {
      id: 10,
      name: "Brunello Cucinelli",
      category: "Лоферы",
      categoryId: 11,
      price: 511900,
      photoUrl: "",
    },
  ];
  return (
    <div className="content">
      <Grid className="card" container spacing={2}>
        {contentList.map((item) => (
          <Grid item md={4} lg={4} key={item.id}>
            <Card
              name={item.name}
              category={item.category}
              price={item.price}
              url={item.photoUrl}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Content;
