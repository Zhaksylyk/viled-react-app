import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import "./style.css";

const BreadCrumb = () => {
  return (
    <div className="breadCrumb">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Главная
        </Link>
        <Link underline="hover" color="inherit" href="#">
          Обувь
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          href="#"
          aria-current="page"
        >
          Лофер
        </Link>
      </Breadcrumbs>
    </div>
  );
};

export default BreadCrumb;
