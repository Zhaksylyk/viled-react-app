import React from "react";
import "./style.css";
import logo from "../../assets/logo.png";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

const Header = () => {
  const categoryItems = [
    {
      name: "Женщины",
      url: "",
    },
    {
      name: "Мужчины",
      url: "",
    },
    {
      name: "Дети",
      url: "",
    },
  ];
  return (
    <div className="header">
      <div className="leftBlock">
        <div className="multiLang">Россия</div>
        <div className="currency">Р</div>

        <div className="category">
          {categoryItems.map((item, index) => (
            <span className="categoryItem" key={index}>
              {item.name}
            </span>
          ))}
        </div>
      </div>
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="headerButtons">
        <SearchOutlinedIcon className="pr-21" />
        <Person2OutlinedIcon className="pr-21" />
        <FavoriteBorderOutlinedIcon className="pr-21" />
        <ShoppingBagOutlinedIcon className="pr-21" />
      </div>
    </div>
  );
};

export default Header;
