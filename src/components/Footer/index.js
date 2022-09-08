import React from "react";
import "./style.css";
import Grid from "@mui/material/Grid";

const Footer = () => {
  return (
    <Grid className="footer" container spacing={2}>
      <Grid item md={3} lg={3}>
        О КОМПАНИИ
      </Grid>
      <Grid item md={3} lg={3}>
        ОБСЛУЖИВАНИЕ КЛИЕНТОВ
      </Grid>
      <Grid item md={3} lg={3}>
        VILED В СОЦСЕТЯХ
      </Grid>
      <Grid item md={3} lg={3}>
        App
      </Grid>
    </Grid>
  );
};

export default Footer;
