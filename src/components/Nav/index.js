import React from "react";
import "./style.css";

const Nav = () => {
  const navItems = [
    { name: "Новинки", url: "" },
    { name: "Бренды", url: "" },
    { name: "Одежда", url: "" },
    { name: "Обувь", url: "" },
    { name: "Сумки", url: "" },
    { name: "Ювелирные украшения", url: "" },
    { name: "Часы", url: "" },
    { name: "Аксессуары", url: "" },
    { name: "Косметика", url: "" },
    { name: "Интерьер", url: "" },
    { name: "Выгодные предложения", url: "" },
  ];
  return (
    <div className="nav">
      {navItems.map((item) => (
        <p className="navItem">{item.name}</p>
      ))}
    </div>
  );
};

export default Nav;
