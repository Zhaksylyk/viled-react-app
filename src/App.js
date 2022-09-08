import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import "./app.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import BreadCrumb from "./components/BreadCrumb";
import Title from "./components/Title";
import Sort from "./components/Sort";
import PaginationBlock from "./components/Pagination";
import Content from "./components/Content";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Container className="mainContainer">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid item xs={12} md={12} lg={12}>
            <Header />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Nav />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <BreadCrumb />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Title />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Sort />
          </Grid>
          <Grid item md={3} lg={3}>
            Filter
          </Grid>
          <Grid item md={9} lg={9}>
            <Content />
          </Grid>
          <Grid item md={12} lg={12}>
            <PaginationBlock />
          </Grid>
          <Grid item md={12} lg={12}>
            <Footer />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default App;
